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
        return await this.prismaService.historial.findMany({
            include: {
                inventario: {
                    include: {
                        tipocomponente: true,
                        zona: true,
                        almacenes: true,
                        estado: true
                    }
                },
                tipomovimiento: true
            }
        });
    }

    async postHistorial(add: DtoCreateHistorial): Promise<DtoBaseResponse>{
        const createHistorial = await this.prismaService.historial.create({
            data: {
                inventarioId: add.inventarioId,
                tipoMovimientoId: add.tipoMovimientoId,
                fechaMovimiento: new Date(),
            }
        });

        if(!createHistorial){
            throw new BadRequestException('El historial no pudo ser registrado.')
        }

        baseResponse.message = 'Historial registrado.'
        return baseResponse;
    }

}
