import { BadRequestException, Injectable } from '@nestjs/common';
import { tallerreparacion } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateHistorial } from 'src/dtos/historial.dto';
import { DtoCreateTallerReparacion, DtoUpdateTallerReparacion } from 'src/dtos/taller-reparacion.dto';
import { HistorialService } from 'src/historial/historial.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TallerReparacionService {

    constructor(private prismaService: PrismaService, private historialService: HistorialService) { }

    async getTaller(): Promise<tallerreparacion[]> {
        return await this.prismaService.tallerreparacion.findMany({
            where: {
                inventario: {
                    estadoId: 2
                }
            },
            include: {
                inventario: {
                    include: {
                        tipocomponente: true
                    }
                }
            }
        });
    }

    // async postTaller(add: DtoCreateTallerReparacion): Promise<DtoBaseResponse>{
    //     const createTaller = await this.prismaService.tallerreparacion.create({
    //         data: {
    //             taller: add.taller,
    //             inventarioId: add.inventarioId,
    //         }
    //     });

    //     if(!createTaller){
    //         badBaseResponse.message = 'El taller no pudo ser registrado.';
    //         return badBaseResponse;
    //     }

    //     baseResponse.message = 'Taller registrado.'
    //     return baseResponse;
    // }

    async putTaller(update: DtoUpdateTallerReparacion): Promise<DtoBaseResponse>{
        const findInventario = await this.prismaService.inventario.findFirst({
            where: {
                idInventario: update.inventarioId
            }
        });

        if(!findInventario){
            badBaseResponse.message = 'Componente no encontrado.';
            return badBaseResponse;
        }
        
        const updateTaller = await this.prismaService.tallerreparacion.update({
            data: {
                inventarioId: update.inventarioId,
            },
            where: {
                idTaller: update.idTaller
            }
        });

        if(!updateTaller){
            badBaseResponse.message = 'El registro del taller no se pudo actualizar.';
            return badBaseResponse;
        }

        const saveHistory: DtoCreateHistorial = {
            description: findInventario.descripcion,
            pn: findInventario.pn,
            sn: findInventario.sn,
            cantidad: findInventario.cantidad,
            madeBy: update.madeBy,
            tipoMovimientoId: 3,
            estadoId: 2,
            orderHistorial: findInventario.order,
        }

        this.historialService.postHistorial(saveHistory);

        this.deleteTaller(updateTaller.idTaller.toString());

        const finishStatus = await this.prismaService.inventario.update({
            data: {
                estadoId: 4
            }, 
            where: {
                idInventario: findInventario.idInventario
            }
        });

        baseResponse.message = 'Registro del taller actualizado.'
        return baseResponse;
    }
    
    async deleteTaller(id: string): Promise<DtoBaseResponse> {
        const deleteTaller = await this.prismaService.tallerreparacion.delete({
            where: {
                idTaller: Number(id)
            }
        });

        if(!deleteTaller){
            badBaseResponse.message = 'Ha ocurrido un error';
            return badBaseResponse;
        }

        baseResponse.message = 'Registro del taller eliminado.'

        return baseResponse;
    }

}
