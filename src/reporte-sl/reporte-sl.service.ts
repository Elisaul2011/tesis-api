import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario, reporteshelflife } from '@prisma/client';
import { AppService, IColumns } from 'src/app.service';
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

    daysUntil = (targetDate: string | Date): string => {
        const today = new Date();
        const target = new Date(targetDate);
        const differenceInTime = target.getTime() - today.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        return `Vence en  ${differenceInDays} días.`;
    }

    async generateExcelReport(): Promise<Buffer> {
        const dataReport = await this.getReporte();

        const dataReportParse = dataReport.map((rep: any) => {
            return {
                nombre: rep.almacenes.nombre,
                zona: rep.zona.zona,
                pn: rep.pn,
                descripcion: rep.descripcion,
                tipocomponente: rep.tipocomponente.tipoComponente,
                sn: rep.sn,
                cantidad: rep.cantidad,
                lote: rep.lote,
                estado: rep.estado.estado,
                venceEn: this.daysUntil(rep.shelfLife),
            }
        });

        const columnsReport: IColumns[] = [
            {
                header: 'Ubicación',
                column: 'nombre',
            },
            {
                header: 'Zona',
                column: 'zona',
            },
            {
                header: 'P/N',
                column: 'pn',
            },
            {
                header: 'Descripción',
                column: 'descripcion',
            },
            {
                header: 'Tipo',
                column: 'tipocomponente',
            },
            {
                header: 'S/N',
                column: 'sn',
            },
            {
                header: 'Cantidad',
                column: 'cantidad',
            },
            {
                header: 'Lote',
                column: 'lote',
            },
            {
                header: 'Estado',
                column: 'estado',
            },
            {
                header: 'Vence en',
                column: 'venceEn',
            }
        ];

        return await this.appService.generateExcelFile(columnsReport, dataReportParse);
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
