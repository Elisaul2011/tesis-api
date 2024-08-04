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
                idHistorial: add.idHistorial,
                inventarioId: add.inventarioId,
                inspeccionId: add.inspeccionId,
                ordenCompraId: add.ordenCompraId,
                aeronaveId: add.aeronaveId,
                tallerId: add.tallerId,
                userId: add.userId,
                tipoMovimientoId: add.tipoMovimientoId
            }
        });

        if(!createHistorial){
            throw new BadRequestException('El historial no pudo ser registrado.')
        }

        baseResponse.message = 'Historial registrado.'
        return baseResponse;
    }

}
