import { BadRequestException, Injectable } from '@nestjs/common';
import { necesidadesTecnicas } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateNecesidades, DtoUpdateNecesidades } from 'src/dtos/necesidades-tecnicas.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NecesidadesTecnicasService {

    constructor(private prismaService: PrismaService) { }

    async getNecesidades(): Promise<necesidadesTecnicas[]> {
        return await this.prismaService.necesidadesTecnicas.findMany();
    }

    async postNecesidades(add: DtoCreateNecesidades): Promise<DtoBaseResponse>{
        const createNecesidades = await this.prismaService.necesidadesTecnicas.create({
            data: {
                pn: add.pn,
                descripcion: add.descripcion,
                cantidad: add.cantidad
            }
        });

        if(!createNecesidades){
            throw new BadRequestException('la solicitud de necesidades no pudo ser registrado.')
        }

        baseResponse.message = 'Solicitud de necesidades registrado.'
        return baseResponse;
    }

    async putNecesidades(update: DtoUpdateNecesidades): Promise<DtoBaseResponse>{
        const updateNecesidades = await this.prismaService.necesidadesTecnicas.update({
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
            throw new BadRequestException('La solicitud de necesidades no se pudo actualizar.')
        }

        baseResponse.message = 'Solicitud de necesidades actualizado.'
        return baseResponse;
    }
    
    async deleteNecesidades(id: string): Promise<DtoBaseResponse> {
        const deleteNecesidades = await this.prismaService.necesidadesTecnicas.delete({
            where: {
                idNecesidadesTecnicas: Number(id)
            }
        });

        if(!deleteNecesidades){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Solicitud de necesidades eliminada.'

        return baseResponse;
    }

}
