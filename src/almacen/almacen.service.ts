import { BadRequestException, Injectable } from '@nestjs/common';
import { almacenes, zona } from '@prisma/client';
import { DtoCreateAlmacen, DtoUpdateAlmacen } from 'src/dtos/almacen.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlmacenService {

    constructor(private prismaService: PrismaService){}

    async getAlmacen(): Promise<almacenes[]> {
        return await this.prismaService.almacenes.findMany({
            include: {
                idZona: true
            }
        })
    }

    async getZona(): Promise<zona[]> {
        return await this.prismaService.zona.findMany()
    }

    async postAlmacen(add: DtoCreateAlmacen): Promise<DtoBaseResponse>{
        const createAlmacen = this.prismaService.almacenes.create({
            data: {
                ciudad: add.ciudad,
                descripcion: add.descripcion,
                estado: add.estado,
                pais: add.pais,
                nombre: add.nombre,
                zonaId: add.zonaId
            }
        });

        if(!createAlmacen){
            throw new BadRequestException('El almacen no pudo ser creado.')
        }

        baseResponse.message = 'Almacen creado.'
        return baseResponse;
    }

    async putAlmacen(update: DtoUpdateAlmacen): Promise<DtoBaseResponse>{
        const updateAlmacen = this.prismaService.almacenes.update({
            data: {
                ciudad: update.ciudad,
                descripcion: update.descripcion,
                estado: update.estado,
                pais: update.pais,
                nombre: update.nombre,
                zonaId: update.zonaId
            },
            where: {
                idAlmacenes: update.idAlmacenes
            }
        });

        if(!updateAlmacen){
            throw new BadRequestException('El almacen no se pudo actualizar.')
        }

        baseResponse.message = 'Almacen actualizado.'
        return baseResponse;
    }

}
