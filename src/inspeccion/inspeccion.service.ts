import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoUpdateInspeccion } from 'src/dtos/inspeccion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InspeccionService {

    constructor(private prismaService: PrismaService) { }

    async getInspeccion(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
                where:{
                    estadoId: 1
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
}
