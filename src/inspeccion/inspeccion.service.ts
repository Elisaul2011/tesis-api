import { BadRequestException, Injectable } from '@nestjs/common';
import { inspeccion, inventario } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateInspeccion, DtoUpdateInspeccion } from 'src/dtos/inspeccion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InspeccionService {

    constructor(private prismaService: PrismaService) { }

    async getInspeccion(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
                where:{
                    estadoId: 2
                },
                include:{
                    tipocomponente: true,
                    zona: true,
                    almacenes: true,
                    estado: true
                }
            }
        );
    }

    async postInspeccion(add: DtoCreateInspeccion): Promise<DtoBaseResponse>{
        const createInspeccion = await this.prismaService.inspeccion.create({
            data: {
                inventarioId: add.inventarioId,
            }
        });

        if(!createInspeccion){
            throw new BadRequestException('La inspeccion no pudo ser registrada.')
        }

        baseResponse.message = 'Inspeccion registrada.'
        return baseResponse;
    }

    async putInspeccion(update: DtoUpdateInspeccion): Promise<DtoBaseResponse>{
        const updateInspeccion = await this.prismaService.inventario.update({
            data: {
                estadoId: update.active == true ? 1 : 4,
            },
            where: {
                idInventario: update.idInventario
            }
        });

        if(!updateInspeccion){
            throw new BadRequestException('La inspeccion no se pudo actualizar.')
        }

        baseResponse.message = 'Inspeccion actualizada.'
        return baseResponse;
    }
    
    async deleteInspeccion(id: string): Promise<DtoBaseResponse> {
        const deleteInspeccion = await this.prismaService.inspeccion.delete({
            where: {
                idInspeccion: Number(id)
            }
        });

        if(!deleteInspeccion){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Inspeccion eliminada.'

        return baseResponse;
    }

}
