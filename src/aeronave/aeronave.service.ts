import { BadRequestException, Injectable } from '@nestjs/common';
import { aeronave } from '@prisma/client';
import { DtoCreateAeronave, DtoUpdateAeronave } from 'src/dtos/aeronave.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AeronaveService {

    constructor(private prismaService: PrismaService) { }

    async getAeronave(): Promise<aeronave[]> {
        return await this.prismaService.aeronave.findMany({
            where: {
                inventario: {
                    estadoId: 2
                }
            },
            include: {
                inventario: {
                    include: {
                        tipocomponente: true
                    }
                }
            }
        });
    }

    async postAeronave(add: DtoCreateAeronave): Promise<DtoBaseResponse>{
        const createAeronave = this.prismaService.aeronave.create({
            data: {
                aeronave: add.aeronave,
                inventarioId: add.inventarioId,
            }
        });

        if(!createAeronave){
            throw new BadRequestException('La aeronave  no pudo ser registrado.')
        }

        baseResponse.message = 'Aeronave registrado.'
        return baseResponse;
    }

    async putAeronave(update: DtoUpdateAeronave): Promise<DtoBaseResponse>{
        const updateAeronave = this.prismaService.aeronave.update({
            data: {
                aeronave: update.aeronave,
                inventarioId: update.inventarioId,
            },
            where: {
                idAeronave: update.idAeronave
            }
        });

        if(!updateAeronave){
            throw new BadRequestException('El registro de la aeronave no se pudo actualizar.')
        }

        baseResponse.message = 'Registro de la aeronave actualizada.'
        return baseResponse;
    }
    
    async deleteAeronave(id: string): Promise<DtoBaseResponse> {
        const deleteAeronave = await this.prismaService.aeronave.delete({
            where: {
                idAeronave: Number(id)
            }
        });

        if(!deleteAeronave){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Registro de aeronave eliminado.'

        return baseResponse;
    }

}
