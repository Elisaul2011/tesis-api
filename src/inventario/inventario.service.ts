import { BadRequestException, Injectable } from '@nestjs/common';
import { inventario, almacenes, zona, atas } from '@prisma/client';
import { AppService, IColumns } from 'src/app.service';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateHistorial } from 'src/dtos/historial.dto';
import { DtoAsignInventario, DtoCreateInventario, DtoUpdateInventario } from 'src/dtos/inventario.dto';
import { HistorialService } from 'src/historial/historial.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventarioService {
    constructor(
        private prismaService: PrismaService,
        private historialService: HistorialService,
        private appService: AppService
    ) { }

    async getInventario(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
            where: {
                estadoId: {
                    in: [1,2,3]
                }
            },
            include: {
                estado: true,
                tipocomponente: true,
                almacenes: true,
                zona: true,
                atas: true
            }
        });
    }

    async getInventarioServices(): Promise<inventario[]> {
        return await this.prismaService.inventario.findMany({
            where: {
                estado: {
                    idEstado: 2
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

    async generateExcelInvenory(): Promise<Buffer> {
        const dataInventory = await this.getInventario();

        const dataInventoryParse = dataInventory.map((inv: any) => {
            return {
                nombre: inv.almacenes.nombre,
                zona: inv.zona.zona,
                pn: inv.pn,
                ata: inv.atas.NombreATA,
                proveedor: inv.proveedor,
                descripcion: inv.descripcion,
                tipoComponente: inv.tipocomponente.tipoComponente,
                sn: inv.sn,
                cantidad: inv.cantidad,
                lote: inv.lote,
                estado: inv.estado.estado,
                shelfLife: inv.shelfLife,
                order: inv.order,
            }
        });

        const columnsInventory: IColumns[] = [
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
                header: 'Ata',
                column: 'ata',
            },
            {
                header: 'Proveedor',
                column: 'proveedor',
            },
            {
                header: 'Tipo Componente',
                column: 'tipoComponente',
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
                header: 'Shelf Lite',
                column: 'shelfLife',
            },
            {
                header: '# Orden',
                column: 'order',
            }
        ];

        return await this.appService.generateExcelFile(columnsInventory, dataInventoryParse);
    }

    async postInventarioOrder(asign: DtoAsignInventario): Promise<DtoBaseResponse> {
        const updateInventory = await this.prismaService.inventario.updateMany({
            data: {
                estadoId: 2,
                order: asign.order
            }, where: {
                idInventario: { in: asign.idInventario }
            }
        });

        if (!updateInventory) {
            badBaseResponse.message = 'Ha ocurrido un error al actualizar';
            return badBaseResponse;
        }

        if (asign.typeOrder == 1) {
            const createAeronave = await this.prismaService.aeronave.createMany({
                data: asign.idInventario.map(id => ({
                    inventarioId: id,
                    aeronave: asign.text // Reemplaza con el texto que desees
                }))
            });

            if (!createAeronave) {
                badBaseResponse.message = 'El componente no pudo ser registrado.'
                return badBaseResponse;
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
                badBaseResponse.message = 'El componente no pudo ser registrado.'
                return badBaseResponse;
            }
        }

        baseResponse.message = 'Componente registrado.';
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
                proveedor: add.proveedor,
                estadoId: 1,
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
            badBaseResponse.message = 'El componente no pudo ser registrado.'
            return badBaseResponse;
        }

        const saveHistory: DtoCreateHistorial = {
            description: createInventario.descripcion,
            pn: createInventario.pn,
            sn: createInventario.sn,
            cantidad: createInventario.cantidad,
            madeBy: add.userId,
            tipoMovimientoId: 4,
            estadoId: 1,
            orderHistorial: createInventario.order,
        }

        this.historialService.postHistorial(saveHistory);

        baseResponse.message = 'Componente registrado.';
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
                proveedor: update.proveedor,
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
            badBaseResponse.message = 'El registro del componente no se pudo actualizar.'
            return badBaseResponse;
        }

        baseResponse.message = 'Registro de componente actualizado.';
        return baseResponse;
    }

    async deleteInventario(id: string): Promise<DtoBaseResponse> {
        const deleteInventario = await this.prismaService.inventario.delete({
            where: {
                idInventario: Number(id)
            }
        });

        if (!deleteInventario) {
            badBaseResponse.message = 'Ha ocurrido un error';
            return badBaseResponse;
        }

        baseResponse.message = 'Registro de componente eliminado.'

        return baseResponse;
    }
}
