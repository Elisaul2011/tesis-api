import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateHistorial } from 'src/dtos/historial.dto';
import { DtoUpdateInspeccion } from 'src/dtos/inspeccion.dto';
import { HistorialService } from 'src/historial/historial.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InspeccionService {

    constructor(private prismaService: PrismaService, private historialService: HistorialService) { }

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
                estadoId: update.active == true ? 2 : 3,
                order: update.orderInspect
            },
            where: {
                idInventario: update.idInventario
            }
        });

        if(!updateInspeccion){
            badBaseResponse.message = 'La inspeccion no se pudo actualizar.';
            return badBaseResponse;
        }

        const saveHistory: DtoCreateHistorial = {
            description: updateInspeccion.descripcion,
            pn: updateInspeccion.pn,
            sn: updateInspeccion.sn,
            cantidad: updateInspeccion.cantidad,
            madeBy: update.inspectecBy,
            tipoMovimientoId: 1,
            estadoId: update.active == true ? 2 : 3,
            orderHistorial: updateInspeccion.order,
        }

        this.historialService.postHistorial(saveHistory);

        baseResponse.message = 'Inspeccion actualizada.'
        return baseResponse;
    }
}
