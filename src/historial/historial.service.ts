import { BadRequestException, Injectable } from '@nestjs/common';
import { historial } from '@prisma/client';
import { AppService, IColumns } from 'src/app.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateHistorial } from 'src/dtos/historial.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HistorialService {

    constructor(private prismaService: PrismaService, private appService: AppService) { }

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

    async generateExcelHistory(): Promise<Buffer> {
        const dataHistory = await this.getHistorial();

        const dataParse = dataHistory.map((history: any) => {
            return {
                descripcion: history.inventario.descripcion,
                pn: history.inventario.pn,
                sn: history.inventario.sn,
                cantidad: history.inventario.cantidad,
                madeBy: 'admin',
                tipoMovimiento: history.tipomovimiento.tipoMovimiento,
                estado: history.inventario.estado.estado,
                order: history.inventario.order,
                shelfLife: history.inventario.shelfLife,
                fechaMovimiento: history.fechaMovimiento
            }
        })
        const columnsHistory: IColumns[] = [
            {
                header: 'Descripción',
                column: 'descripcion',
            },
            {
                header: 'P/N',
                column: 'pn',
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
                header: 'Realizado Por',
                column: 'madeBy',
            },
            {
                header: 'Tipo de Movimiento',
                column: 'tipoMovimiento',
            },
            {
                header: 'Estado del Componente',
                column: 'estado',
            },
            {
                header: '# Order',
                column: 'order',
            },
            {
                header: 'Fecha del Movimiento',
                column: 'fechaMovimiento',
            }
        ];

        return await this.appService.generateExcelFile(columnsHistory, dataParse);
    }

    async postHistorial(add: DtoCreateHistorial): Promise<DtoBaseResponse> {
        const createHistorial = await this.prismaService.historial.create({
            data: {
                inventarioId: add.inventarioId,
                tipoMovimientoId: add.tipoMovimientoId,
                fechaMovimiento: new Date(),
            }
        });

        if (!createHistorial) {
            throw new BadRequestException('El historial no pudo ser registrado.')
        }

        baseResponse.message = 'Historial registrado.'
        return baseResponse;
    }

}
