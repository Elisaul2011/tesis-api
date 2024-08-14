import { BadRequestException, Injectable } from '@nestjs/common';
import { necesidadestecnicas } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateNecesidades, DtoUpdateNecesidades } from 'src/dtos/necesidades-tecnicas.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NecesidadesTecnicasService {

    constructor(private prismaService: PrismaService) { }

    async getNecesidades(): Promise<necesidadestecnicas[]> {
        return await this.prismaService.necesidadestecnicas.findMany({
            include: {
                inventario: {
                    include: {
                        tipocomponente: true,
                        zona: true,
                        almacenes: true,
                        estado: true
                    }
                }
            }
        });
    }

    async postNecesidades(add: DtoCreateNecesidades): Promise<DtoBaseResponse>{
        const findInventarioId = await this.prismaService.inventario.findFirst({
            where: {
                idInventario: add.inventarioId,
            }
        });

        if(!findInventarioId){
            badBaseResponse.message = 'Componente no encontrado.';
            return badBaseResponse;
        }

        const updateInventory = await this.prismaService.inventario.update({
            data: {
                cantidad: findInventarioId.cantidad - add.cantidad
            },
            where: {
                idInventario: add.inventarioId,
            }
        });

        if(!updateInventory){
            badBaseResponse.message = 'Ocurrio un error al actualizar el inventario.';
            return badBaseResponse;
        }

        const createNecesidades = await this.prismaService.necesidadestecnicas.create({
            data: {
                pn: add.pn,
                descripcion: add.descripcion,
                cantidad: add.cantidad
            }
        });

        if(!createNecesidades){
            badBaseResponse.message = 'La solicitud de necesidades no pudo ser registrado.';
            return badBaseResponse;
        }

        baseResponse.message = 'Solicitud de necesidades registrado.'
        return baseResponse;
    }

    async putNecesidades(update: DtoUpdateNecesidades): Promise<DtoBaseResponse>{
        const updateNecesidades = await this.prismaService.necesidadestecnicas.update({
            data: {
                pn: update.pn,
                descripcion: update.descripcion,
                cantidad: update.cantidad
            },
            where: {
                idNecesidadesTecnicas: update.idNecesidadesTecnicas
            }
        });

        if(!updateNecesidades){
            badBaseResponse.message = 'La solicitud de necesidades no se pudo actualizar.';
            return badBaseResponse;
        }

        baseResponse.message = 'Solicitud de necesidades actualizado.'
        return baseResponse;
    }
    
    async deleteNecesidades(id: string): Promise<DtoBaseResponse> {
        const deleteNecesidades = await this.prismaService.necesidadestecnicas.delete({
            where: {
                idNecesidadesTecnicas: Number(id)
            }
        });

        if(!deleteNecesidades){
            badBaseResponse.message = 'Ha ocurrido un error';
            return badBaseResponse;
        }

        baseResponse.message = 'Solicitud de necesidades eliminada.'

        return baseResponse;
    }

}
