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

        const createtipoComponente = await this.prismaService.tipoComponente.createMany({
            data: [
                {
                    tipoComponente: 'Consumibles'
                },
                {
                    tipoComponente: 'Consumibles Serializado'
                },
                {
                    tipoComponente: 'Equipo'
                },
                {
                    tipoComponente: 'Herramienta'
                },
                {
                    tipoComponente: 'Motor'
                },
                {
                    tipoComponente: 'Propela'
                },
                {
                    tipoComponente: 'Rotable'
                },
            ]
        });

        const createtipoMovimiento = await this.prismaService.tipoMovimiento.createMany({
            data: [
                {
                    tipoMovimiento: 'Inspeccionar'
                },
                {
                    tipoMovimiento: 'Prestar'
                },
                {
                    tipoMovimiento: 'WO'
                },
                {
                    tipoMovimiento: 'OT'
                },
                {
                    tipoMovimiento: 'Cuarentena'
                },
            ]
        })

        const createEstado = await this.prismaService.estado.createMany({
            data: [
                {
                    estado: 'Serviciable'
                },
                {
                    estado: 'Esperando por inspección'
                },
                {
                    estado: 'En préstamo'
                },
                {
                    estado: 'En cuarentena'
                },
            ]
        })

        if(!createRoles){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createUsers){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createtipoComponente){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createAtas){
            throw new BadRequestException('Se produjo un error.');
        }

        if(!createtipoMovimiento){
            throw new BadRequestException('Se produjo un error.');
        }

        baseResponse.message = 'Se han creado los datos.';

        return baseResponse;
    }
}
