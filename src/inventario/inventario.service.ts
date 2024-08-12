import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario, almacenes, zona, atas } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoAsignInventario, DtoCreateInventario, DtoUpdateInventario } from 'src/dtos/inventario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventarioService {
    constructor(private prismaService: PrismaService) { }

    async getInventario(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
            include: {
                estado: true,
                tipocomponente: true,
                almacenes: true,
                zona: true
            }
        });
    }

    async getInventarioServices(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
            where: {
                estado: {
                    idEstado: 1
                }
            },
            include: {
                estado: true,
                tipocomponente: true,
                almacenes: true,
                zona: true
            }
        });
    }

    async getAtas(): Promise<atas[]> {
        return await this.prismaService.atas.findMany();
    }

    async postInventarioOrder(asign: DtoAsignInventario): Promise<DtoBaseResponse> {

        const updateInventory = await this.prismaService.inventario.updateMany({
            data: {
                estadoId: 2,
                order: asign.order
            }, where : {
                idInventario: { in: asign.idInventario }
            }
        });

        if(!updateInventory){
            throw new BadRequestException('Ha ocurrido un error al actualziar')
        }

        if (asign.typeOrder == 1) {
            const createAeronave = await this.prismaService.aeronave.createMany({
                data: asign.idInventario.map(id => ({
                    inventarioId: id,
                    aeronave: asign.text // Reemplaza con el texto que desees
                }))
            });

            if (!createAeronave) {
                throw new BadRequestException('El componente no pudo ser registrado.')
            }
        }

        if (asign.typeOrder == 2) {
            const createTaller = await this.prismaService.tallerreparacion.createMany({
                data: asign.idInventario.map(id => ({
                    inventarioId: id,
                    taller: asign.text // Reemplaza con el texto que desees
                }))
            });

            if (!createTaller) {
                throw new BadRequestException('El componente no pudo ser registrado.')
            }
        }

        baseResponse.message = 'Componente registrado.'
        return baseResponse;
    }

    async postInventario(add: DtoCreateInventario): Promise<DtoBaseResponse> {
        const createInventario = await this.prismaService.inventario.create({
            data: {
                almacenesId: add.almacenesId,
                pn: add.pn,
                descripcion: add.descripcion,
                tipoComponenteId: add.tipoComponenteId,
                sn: add.sn,
                cantidad: add.cantidad,
                lote: add.lote,
                fabricante: add.fabricante,
                estadoId: 2,
                shelfLife: add.shelfLife,
                order: '',
                zonaId: add.zonaId,
                ataId: add.ataId,
                horasManualesId: 1,
                necesidadesTecnicasId: 1,
                rolId: 1
            }
        });

        if (!createInventario) {
            throw new BadRequestException('El componente no pudo ser registrado.')
        }

        baseResponse.message = 'Componente registrado.'
        return baseResponse;
    }

    async putInventario(update: DtoUpdateInventario): Promise<DtoBaseResponse> {
        const updateInventario = await this.prismaService.inventario.update({
            data: {
                almacenesId: update.almacenesId,
                pn: update.pn,
                descripcion: update.descripcion,
                tipoComponenteId: update.tipoComponenteId,
                sn: update.sn,
                cantidad: update.cantidad,
                lote: update.lote,
                fabricante: update.fabricante,
                estadoId: 2,
                shelfLife: update.shelfLife,
                order: '',
                zonaId: update.zonaId,
                ataId: update.ataId,
                horasManualesId: 1,
                necesidadesTecnicasId: 1,
                rolId: 1
            },
            where: {
                idInventario: update.idInventario
            }
        });

        if (!updateInventario) {
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

        if (!deleteInventario) {
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Registro de componente eliminado.'

        return baseResponse;
    }
}
