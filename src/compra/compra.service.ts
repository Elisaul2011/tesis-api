import { BadRequestException, Injectable } from '@nestjs/common';
import { ordencompra } from '@prisma/client';
import { AppService } from 'src/app.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
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
    ){}

    async getCompra(): Promise<ordencompra[]> {
        return await this.prismaService.ordencompra.findMany()
    }

    async generateExcelCompra(): Promise<Buffer> {
        const dataCompra = await this.prismaService.ordencompra.findMany();
        const columnsCompra: string[] = ['descripcion','cantidad','sn','pn','proveedor','ordenCompra','Fecha'];

        return await this.appService.generateExcelFile(columnsCompra, dataCompra);
    }

    async postCompra(add: DtoCreateCompra): Promise<DtoBaseResponse>{
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

        if(!createCompra){
            throw new BadRequestException('La Compra no pudo ser creado.')
        }

        const saveHistory: DtoCreateHistorial = {
            inventarioId: createCompra.idOrdenCompra,
            tipoMovimientoId: 4
        }

        this.historialService.postHistorial(saveHistory);

        baseResponse.message = 'Compra creada.'
        return baseResponse;
    }

    async putCompra(update: DtoUpdateCompra): Promise<DtoBaseResponse>{
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

        if(!updateCompra){
            throw new BadRequestException('La Compra no se pudo actualizar.')
        }

        baseResponse.message = 'Compra actualizada.'
        return baseResponse;
    }

    async deleteCompra(idOrdenCompra: string): Promise<DtoBaseResponse>{
        const deleteCompra = await this.prismaService.ordencompra.delete({
            where: {
                idOrdenCompra: Number(idOrdenCompra)
            }
        });

        if(!deleteCompra){
            throw new BadRequestException('El Compra no se pudo eliminar.')
        }

        baseResponse.message = 'Compra eliminado.'
        return baseResponse;
    }

}
