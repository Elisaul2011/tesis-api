import { BadRequestException, Injectable } from '@nestjs/common';
import { aeronave } from '@prisma/client';
import { DtoCreateAeronave, DtoUpdateAeronave } from 'src/dtos/aeronave.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateHistorial } from 'src/dtos/historial.dto';
import { HistorialService } from 'src/historial/historial.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AeronaveService {

    constructor(private prismaService: PrismaService, private historialService: HistorialService) { }

    async getAeronave(): Promise<aeronave[]> {
        return await this.prismaService.aeronave.findMany({
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

    // async postAeronave(add: DtoCreateAeronave): Promise<DtoBaseResponse>{
    //     const createAeronave = this.prismaService.aeronave.create({
    //         data: {
    //             aeronave: add.aeronave,
    //             inventarioId: add.inventarioId,
    //         }
    //     });

    //     if(!createAeronave){
    //         badBaseResponse.message = 'La aeronave  no pudo ser registrado.';
    //         return badBaseResponse;
    //     }

    //     baseResponse.message = 'Aeronave registrado.'
    //     return baseResponse;
    // }

    async putAeronave(update: DtoUpdateAeronave): Promise<DtoBaseResponse> {
        const findInventario = await this.prismaService.inventario.findFirst({
            where: {
                idInventario: update.inventarioId
            }
        });

        if (!findInventario) {
            badBaseResponse.message = 'Componente no encontrado.';
            return badBaseResponse;
        }

        const updateAeronave = this.prismaService.aeronave.update({
            data: {
                inventarioId: update.inventarioId,
            },
            where: {
                idAeronave: update.idAeronave
            }
        });

        if (!updateAeronave) {
            badBaseResponse.message = 'El registro de la aeronave no se pudo actualizar.';
            return badBaseResponse;
        }

        const saveHistory: DtoCreateHistorial = {
            description: findInventario.descripcion,
            pn: findInventario.pn,
            sn: findInventario.sn,
            cantidad: findInventario.cantidad,
            madeBy: update.madeBy,
            tipoMovimientoId: 2,
            estadoId: 2,
            orderHistorial: findInventario.order,
        }

        this.historialService.postHistorial(saveHistory);

        this.deleteAeronave(update.idAeronave.toString());

        const finishStatus = await this.prismaService.inventario.update({
            data: {
                estadoId: 4
            }, 
            where: {
                idInventario: findInventario.idInventario
            }
        });

        baseResponse.message = 'Registro de la aeronave actualizada.'
        return baseResponse;
    }

    async deleteAeronave(id: string): Promise<DtoBaseResponse> {
        const deleteAeronave = await this.prismaService.aeronave.delete({
            where: {
                idAeronave: Number(id)
            }
        });

        if (!deleteAeronave) {
            badBaseResponse.message = 'Ha ocurrido un error';
            return badBaseResponse;
        }

        baseResponse.message = 'Registro de aeronave eliminado.'

        return baseResponse;
    }

}
