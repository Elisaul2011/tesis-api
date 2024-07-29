import { BadRequestException, Injectable } from '@nestjs/common';
import { tallerReparacion } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateTallerReparacion, DtoUpdateTallerReparacion } from 'src/dtos/taller-reparacion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TallerReparacionService {

    constructor(private prismaService: PrismaService) { }

    async getTaller(): Promise<tallerReparacion[]> {
        return await this.prismaService.tallerReparacion.findMany();
    }

    async postTaller(add: DtoCreateTallerReparacion): Promise<DtoBaseResponse>{
        const createTaller = this.prismaService.tallerReparacion.create({
            data: {
                taller: add.taller,
                inventarioId: add.inventarioId,
                workshopOrder: add.workshopOrder
            }
        });

        if(!createTaller){
            throw new BadRequestException('El taller no pudo ser registrado.')
        }

        baseResponse.message = 'Taller registrado.'
        return baseResponse;
    }

    async putTaller(update: DtoUpdateTallerReparacion): Promise<DtoBaseResponse>{
        const updateTaller = this.prismaService.tallerReparacion.update({
            data: {
                taller: update.taller,
                inventarioId: update.inventarioId,
                workshopOrder: update.workshopOrder
            },
            where: {
                idTaller: update.idTaller
            }
        });

        if(!updateTaller){
            throw new BadRequestException('El registro del taller no se pudo actualizar.')
        }

        baseResponse.message = 'Registro del taller actualizado.'
        return baseResponse;
    }
    
    async deleteTaller(id: string): Promise<DtoBaseResponse> {
        const deleteTaller = await this.prismaService.tallerReparacion.delete({
            where: {
                idTaller: Number(id)
            }
        });

        if(!deleteTaller){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Registro del taller eliminado.'

        return baseResponse;
    }

}