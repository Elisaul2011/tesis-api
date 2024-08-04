import { BadRequestException, Injectable } from '@nestjs/common';
import { reporteShelfLife } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateReporte, DtoUpdateReporte } from 'src/dtos/reporte-sl.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReporteSlService {

    constructor(private prismaService: PrismaService) { }

    async getReporte(): Promise<reporteShelfLife[]> {
        return await this.prismaService.reporteShelfLife.findMany();
    }

    async postReporte(add: DtoCreateReporte): Promise<DtoBaseResponse>{
        const createReporte = await this.prismaService.reporteShelfLife.create({
            data: {
                idReporteShelfLife: add.idReporteShelfLife,
                inventarioId: add.inventarioId,
                venceEn: add.venceEn,
            }
        });

        if(!createReporte){
            throw new BadRequestException('El reporte no pudo ser registrado.')
        }

        baseResponse.message = 'Reporte registrado.'
        return baseResponse;
    }

    async putReporte(update: DtoUpdateReporte): Promise<DtoBaseResponse>{
        const updateReporte = await this.prismaService.reporteShelfLife.update({
            data: {
                idReporteShelfLife: update.idReporteShelfLife,
                inventarioId: update.inventarioId,
                venceEn: update.venceEn
            },
            where: {
                idReporteShelfLife: update.idReporteShelfLife
            }
        });

        if(!updateReporte){
            throw new BadRequestException('El reporte no se pudo actualizar.')
        }

        baseResponse.message = 'Reporte actualizado.'
        return baseResponse;
    }
    
    async deleteReporte(id: string): Promise<DtoBaseResponse> {
        const deleteReporte = await this.prismaService.reporteShelfLife.delete({
            where: {
                idReporteShelfLife: Number(id)
            }
        });

        if(!deleteReporte){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Reporte eliminado.'

        return baseResponse;
    }

}
