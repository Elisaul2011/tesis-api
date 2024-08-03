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
                almacenesId: add.almacenesId,
                zonaid: add.zonaid,
                pn: add.pn,
                descripcion: add.descripcion,
                tipoComponenteId: add.tipoComponenteId,
                sn: add.sn,
                cantidad: add.cantidad,
                lote: add.lote,
                estadoId: add.estadoId,
                shelfLife: add.shelfLife,
                venceEn: add.venceEn
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
                almacenesId: update.almacenesId,
                zonaid: update.zonaid,
                pn: update.pn,
                descripcion: update.descripcion,
                tipoComponenteId: update.tipoComponenteId,
                sn: update.sn,
                cantidad: update.cantidad,
                lote: update.lote,
                estadoId: update.estadoId,
                shelfLife: update.shelfLife,
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
