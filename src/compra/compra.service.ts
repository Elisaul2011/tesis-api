import { BadRequestException, Injectable } from '@nestjs/common';
import { ordenCompra } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateCompra, DtoUpdateCompra } from 'src/dtos/compra.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompraService {

    constructor(private prismaService: PrismaService){}

    async getCompra(): Promise<ordenCompra[]> {
        return await this.prismaService.ordenCompra.findMany({
        })
    }

    async postCompra(add: DtoCreateCompra): Promise<DtoBaseResponse>{
        const createCompra = await this.prismaService.ordenCompra.create({
            data: {
                ordenCompra: add.ordenCompra,
                Fecha: add.Fecha,
                descripcion: add.descripcion,
                cantidad: add.cantidad,
                pn: add.pn,
                sn: add.sn,
            }
        });

        if(!createCompra){
            throw new BadRequestException('La Compra no pudo ser creado.')
        }

        baseResponse.message = 'Compra creada.'
        return baseResponse;
    }

    async putCompra(update: DtoUpdateCompra): Promise<DtoBaseResponse>{
        const updateCompra = await this.prismaService.ordenCompra.update({
            data: {
                ordenCompra: update.ordenCompra,
                Fecha: update.Fecha,
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
        const deleteCompra = await this.prismaService.ordenCompra.delete({
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