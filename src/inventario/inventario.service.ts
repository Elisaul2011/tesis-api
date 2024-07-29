import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateInventario, DtoUpdateInventario } from 'src/dtos/inventario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventarioService {
    constructor(private prismaService: PrismaService) { }

    async getInventario(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany();
    }

    async postInventario(add: DtoCreateInventario): Promise<DtoBaseResponse>{
        const createInventario = this.prismaService.inventario.create({
            data: {
                almacenesId: add.almacenesId, 
                pn: add.pn,
                descripcion: add.descripcion,
                tipoComponenteId: add.tipoComponenteId,
                sn: add.sn,
                cantidad: add.cantidad,
                lote: add.lote,
                estadoId: add.estadoId,
                shelfLife: add.shelfLife,
                order: add.order
            }
        });

        if(!createInventario){
            throw new BadRequestException('El componente no pudo ser registrado.')
        }

        baseResponse.message = 'Componente registrado.'
        return baseResponse;
    }

    async putInventario(update: DtoUpdateInventario): Promise<DtoBaseResponse>{
        const updateInventario = this.prismaService.inventario.update({
            data: {
                almacenesId: update.almacenesId,
                pn: update.pn,
                descripcion: update.descripcion,
                tipoComponenteId: update.tipoComponenteId,
                sn: update.sn,
                cantidad: update.cantidad,
                lote: update.lote,
                estadoId: update.estadoId,
                shelfLife: update.shelfLife,
                order: update.order
            },
            where: {
                idInventario: update.idInventario
            }
        });

        if(!updateInventario){
            throw new BadRequestException('El registro del componente no se pudo actualizar.')
        }

        baseResponse.message = 'Registro de componente actualizado.'
        return baseResponse;
    }
    
    async deleteInventario(id: string): Promise<DtoBaseResponse> {
        const deleteInventario = await this.prismaService.inventario.delete({
            where: {
                idInventario: Number(id)
            }
        });

        if(!deleteInventario){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Registro de componente eliminado.'

        return baseResponse;
    }
}
