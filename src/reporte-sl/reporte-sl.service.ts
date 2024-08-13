import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario, reporteshelflife } from '@prisma/client';
import { AppService } from 'src/app.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateReporte, DtoUpdateReporte } from 'src/dtos/reporte-sl.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReporteSlService {

    constructor(private prismaService: PrismaService, private appService: AppService) { }

    async getReporte(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
            include: {
                tipocomponente: true,
                zona: true,
                almacenes: true,
                estado: true
            },
        });
    }

    async generateExcelReport(): Promise<Buffer> {
        const dataReport = await this.prismaService.inventario.findMany({
            include: {
                estado: true,
                tipocomponente: true,
                almacenes: true,
                zona: true
            }
        });
        const columnsReport: string[] = ['descripcion','sn','pn','shelfLife','order'];

        return await this.appService.generateExcelFile(columnsReport, dataReport);
    }

    async postReporte(add: DtoCreateReporte): Promise<DtoBaseResponse> {
        const createReporte = await this.prismaService.reporteshelflife.create({
            data: {
                inventarioId: add.inventarioId,
            }
        });

        if (!createReporte) {
            throw new BadRequestException('El reporte no pudo ser registrado.')
        }

        baseResponse.message = 'Reporte registrado.'
        return baseResponse;
    }

    async putReporte(update: DtoUpdateReporte): Promise<DtoBaseResponse> {
        const updateReporte = await this.prismaService.reporteshelflife.update({
            data: {
                idReporteShelfLife: update.idReporteShelfLife,
                inventarioId: update.inventarioId,
            },
            where: {
                idReporteShelfLife: update.idReporteShelfLife
            }
        });

        if (!updateReporte) {
            throw new BadRequestException('El reporte no se pudo actualizar.')
        }

        baseResponse.message = 'Reporte actualizado.'
        return baseResponse;
    }

    async deleteReporte(id: string): Promise<DtoBaseResponse> {
        const deleteReporte = await this.prismaService.reporteshelflife.delete({
            where: {
                idReporteShelfLife: Number(id)
            }
        });

        if (!deleteReporte) {
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Reporte eliminado.'

        return baseResponse;
    }

}
