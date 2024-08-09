import { baseResponse } from './../dtos/baseResponse';
import { BadRequestException, Injectable } from '@nestjs/common';
import { zona } from '@prisma/client';
import { DtoCreateZona, DtoUpdateZona } from 'src/dtos/almacen.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ZonaService {
    constructor(private prismaService: PrismaService) { }

    async getZonas(): Promise<zona[]> {
        return await this.prismaService.zona.findMany({
            include: {
                almacenes: true,
            },
        });
    }

    async getZonaByAlmacen(almacenId: string): Promise<zona[]> {
        return await this.prismaService.zona.findMany({
            where: {
                almacenId: Number(almacenId),
            },
        });
    }

    async postZonas(zona: DtoCreateZona): Promise<DtoBaseResponse> {
        const newZona = await this.prismaService.zona.create({
            data: zona,
        });

        if (!newZona) {
            throw new BadRequestException('Ha ocurriso un error al crear la zona.');
        }

        baseResponse.message = 'Zona creada exitosamente.';
        return baseResponse;
    }

    async putZona(zona: DtoUpdateZona): Promise<DtoBaseResponse> {
        const updateZona = await this.prismaService.zona.update({
            data: {
                zona: zona.zona,
                descripcionZona: zona.descripcionZona,
                almacenId: zona.almacenId,
            },
            where: {
                idZona: zona.idZona,
            },
        });

        if (!updateZona) {
            throw new BadRequestException(
                'Ha ocurriso un error al actualizar la zona.',
            );
        }

        baseResponse.message = 'Zona actuazliada exitosamente.';
        return baseResponse;
    }

    async deleteZonas(zonaId: string): Promise<DtoBaseResponse> {
        const deleteZona = await this.prismaService.zona.delete({
            where: {
                idZona: Number(zonaId),
            },
        });

        if (!deleteZona) {
            throw new BadRequestException(
                'Ha ocurriso un error al eliminar la zona.',
            );
        }

        baseResponse.message = 'Zona eliminada exitosamente.';
        return baseResponse;
    }
}
