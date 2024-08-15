import { BadRequestException, Injectable } from '@nestjs/common';
import { ordencompra } from '@prisma/client';
import { AppService, IColumns } from 'src/app.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateCompra, DtoUpdateCompra } from 'src/dtos/compra.dto';
import { DtoCreateHistorial } from 'src/dtos/historial.dto';
import { HistorialService } from 'src/historial/historial.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompraService {

    constructor(
        private prismaService: PrismaService,
        private historialService: HistorialService,
        private appService: AppService
    ) { }

    async getCompra(): Promise<ordencompra[]> {
        return await this.prismaService.ordencompra.findMany()
    }

    async generateExcelCompra(): Promise<Buffer> {
        const dataCompra = await this.getCompra();
        const columnsCompra: IColumns[] = [
            {
                header: 'Orden de compra',
                column: 'ordenCompra',
            },
            {
                header: 'Descripción',
                column: 'descripcion',
            },
            {
                header: 'P/N',
                column: 'pn',
            },
            {
                header: 'SN',
                column: 'sn',
            },
            {
                header: 'Cantidad',
                column: 'cantidad',
            },
            {
                header: 'Proveedor',
                column: 'proveedor',
            },
            {
                header: 'Fecha',
                column: 'Fecha',
            }
        ];

        return await this.appService.generateExcelFile(columnsCompra, dataCompra);
    }

    async postCompra(add: DtoCreateCompra): Promise<DtoBaseResponse> {
        const createCompra = await this.prismaService.ordencompra.create({
            data: {
                ordenCompra: add.ordenCompra,
                Fecha: add.fecha,
                descripcion: add.descripcion,
                cantidad: add.cantidad,
                pn: add.pn,
                sn: add.sn,
                proveedor: add.proveedor
            }
        });

        if (!createCompra) {
            badBaseResponse.message = 'La Compra no pudo ser creado.';
            return badBaseResponse;
        }

        const saveHistory: DtoCreateHistorial = {
            description: createCompra.descripcion,
            pn: createCompra.pn,
            sn: createCompra.sn,
            cantidad: createCompra.cantidad,
            madeBy: add.userId,
            tipoMovimientoId: 5,
            estadoId: 1,
            orderHistorial: createCompra.ordenCompra,
        };

        this.historialService.postHistorial(saveHistory);

        baseResponse.message = 'Compra creada.'
        return baseResponse;
    }

    async putCompra(update: DtoUpdateCompra): Promise<DtoBaseResponse> {
        const updateCompra = await this.prismaService.ordencompra.update({
            data: {
                ordenCompra: update.ordenCompra,
                Fecha: update.fecha,
                descripcion: update.descripcion,
                cantidad: update.cantidad,
                pn: update.pn,
                sn: update.sn,
            },
            where: {
                idOrdenCompra: update.idOrdenCompra
            }
        });

        if (!updateCompra) {
            badBaseResponse.message = 'La Compra no se pudo actualizar.';
            return badBaseResponse;
        }

        const saveHistory: DtoCreateHistorial = {
            description: updateCompra.descripcion,
            pn: updateCompra.pn,
            sn: updateCompra.sn,
            cantidad: updateCompra.cantidad,
            madeBy: update.userId,
            tipoMovimientoId: 5,
            estadoId: 1,
            orderHistorial: updateCompra.ordenCompra,
        };

        this.historialService.postHistorial(saveHistory);

        baseResponse.message = 'Compra actualizada.'
        return baseResponse;
    }

    async deleteCompra(idOrdenCompra: string): Promise<DtoBaseResponse> {
        const deleteCompra = await this.prismaService.ordencompra.delete({
            where: {
                idOrdenCompra: Number(idOrdenCompra)
            }
        });

        if (!deleteCompra) {
            badBaseResponse.message = 'El Compra no se pudo eliminar.';
            return badBaseResponse;
        }

        baseResponse.message = 'Compra eliminado.'
        return baseResponse;
    }

}
