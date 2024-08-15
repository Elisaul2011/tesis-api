import { BadRequestException, Injectable } from '@nestjs/common';
import { almacenes, zona } from '@prisma/client';
import { DtoCreateAlmacen, DtoUpdateAlmacen } from 'src/dtos/almacen.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { badBaseResponse, baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlmacenService {

    constructor(private prismaService: PrismaService){}

    async getAlmacen(): Promise<almacenes[]> {
        return await this.prismaService.almacenes.findMany()
    }

    async postAlmacen(add: DtoCreateAlmacen): Promise<DtoBaseResponse>{
        const createAlmacen = await this.prismaService.almacenes.create({
            data: {
                ciudad: add.ciudad,
                descripcion: add.descripcion,
                estado: add.estado,
                pais: add.pais,
                nombre: add.nombre,
            }
        });

        if(!createAlmacen){
            badBaseResponse.message = 'El almacen no pudo ser creado.';
            return badBaseResponse;
        }

        baseResponse.message = 'Almacen creado.'
        return baseResponse;
    }

    async putAlmacen(update: DtoUpdateAlmacen): Promise<DtoBaseResponse>{
        const updateAlmacen = await this.prismaService.almacenes.update({
            data: {
                ciudad: update.ciudad,
                descripcion: update.descripcion,
                estado: update.estado,
                pais: update.pais,
                nombre: update.nombre,
            },
            where: {
                idAlmacenes: update.idAlmacenes
            }
        });

        if(!updateAlmacen){
            badBaseResponse.message = 'El almacen no se pudo actualizar.';
            return badBaseResponse;
        }

        baseResponse.message = 'Almacen actualizado.'
        return baseResponse;
    }

    async deleteAlmacen(idAlmacenes: string): Promise<DtoBaseResponse>{
        const deleteAlmacen = await this.prismaService.almacenes.delete({
            where: {
                idAlmacenes: Number(idAlmacenes)
            }
        });

        if(!deleteAlmacen){
            badBaseResponse.message = 'El almacen no se pudo eliminar.';
            return badBaseResponse;
        }

        baseResponse.message = 'Almacen eliminado.'
        return baseResponse;
    }

}
