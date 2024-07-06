import { BadRequestException, Injectable } from '@nestjs/common';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';
import { dataAta } from './main-load.data';

@Injectable()
export class MainLoadService {

    constructor(private prismaService: PrismaService){}

    async generateAllData(): Promise<DtoBaseResponse> {
        const createAtas = await this.prismaService.atas.createMany({
            data: dataAta
        });

        const createRoles = await this.prismaService.roles.createMany({
            data: [
                {
                    rol: 'Almacenista'
                },
                {
                    rol: 'Inspector'
                },
                {
                    rol: 'Técnico'
                },
                {
                    rol: 'Jefe de almacén'
                }
            ]
        });

        const createUsers = await this.prismaService.user.createMany({
            data: [
                {
                    nameUser: 'Eduardo',
                    lastnameUser: 'Uribe',
                    rolId: 1,
                    password: '12345'
                },
                {
                    nameUser: 'Luis',
                    lastnameUser: 'Nava',
                    rolId: 2,
                    password: '12345'
                },
                {
                    nameUser: 'Saulo',
                    lastnameUser: 'Ortega',
                    rolId: 3,
                    password: '12345'
                },
                {
                    nameUser: 'José',
                    lastnameUser: 'Urdaneta',
                    rolId: 4,
                    password: 'admin123'
                },
            ]
        });

        const createTypesComponents = await this.prismaService.typeComponents.createMany({
            data: [
                {
                    typeComponent: 'Consumibles'
                },
                {
                    typeComponent: 'Consumibles Serializado'
                },
                {
                    typeComponent: 'Equipo'
                },
                {
                    typeComponent: 'Herramienta'
                },
                {
                    typeComponent: 'Motor'
                },
                {
                    typeComponent: 'Propela'
                },
                {
                    typeComponent: 'Rotable'
                },
            ]
        });

        if(!createRoles){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createUsers){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createTypesComponents){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createAtas){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los datos.';

        return baseResponse;
    }
}
