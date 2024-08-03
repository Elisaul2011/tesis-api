import { BadRequestException, Injectable } from '@nestjs/common';
import { historial } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateHistorial, DtoUpdateHistorial } from 'src/dtos/historial.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistorialService {

    constructor(private prismaService: PrismaService) { }

    async getHistorial(): Promise<historial[]> {
        return await this.prismaService.historial.findMany();
    }

    async postHistorial(add: DtoCreateHistorial): Promise<DtoBaseResponse>{
        const createHistorial = await this.prismaService.historial.create({
            data: {
                fechaMovimiento: add.fechaMovimiento,
                pn: add.pn,
                descripcion: add.descripcion,
                sn: add.sn,
                cantidad: add.cantidad,
                origen: add.origen,
                destino: add.destino,
                realizadoPor: add.realizadoPor,
                tipoMovimientoId: add.tipoMovimientoId,
                estadoId: add.estadoId,
                order: add.order
            }
        });

        if(!createHistorial){
            throw new BadRequestException('El historial no pudo ser registrado.')
        }

        baseResponse.message = 'Historial registrado.'
        return baseResponse;
    }

    async putHistorial(update: DtoUpdateHistorial): Promise<DtoBaseResponse>{
        const updateHistorial= await this.prismaService.historial.update({
            data: {
                fechaMovimiento: update.fechaMovimiento,
                pn: update.pn,
                descripcion: update.descripcion,
                sn: update.sn,
                cantidad: update.cantidad,
                origen: update.origen,
                destino: update.destino,
                realizadoPor: update.realizadoPor,
                tipoMovimientoId: update.tipoMovimientoId,
                estadoId: update.estadoId,
                order: update.order
            },
            where: {
                idHistorial: update.idHistorial
            }
        });

        if(!updateHistorial){
            throw new BadRequestException('El historial no se pudo actualizar.')
        }

        baseResponse.message = 'Historial actualizado.'
        return baseResponse;
    }
    
    async deleteHistorial(id: string): Promise<DtoBaseResponse> {
        const deleteHistorial = await this.prismaService.historial.delete({
            where: {
                idHistorial: Number(id)
            }
        });

        if(!deleteHistorial){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Historial eliminado.'

        return baseResponse;
    }

}
