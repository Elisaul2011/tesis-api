import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { roles, user } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateUser, DtoEditUser } from 'src/dtos/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService){}

    async getUsers(): Promise<user[]> {
        return await this.prismaService.user.findMany({
            include: {
                roles: true
            }
        });
    }

    async getUsersByRol(id: string): Promise<user[]> {
        return await this.prismaService.user.findMany({
            where:{
                rolId: Number(id)
            },
            include: {
                roles: true
            }
        });
    }
    async getUsersRoles(): Promise<roles[]> {
        return await this.prismaService.roles.findMany();
    }

    async postUser(newUser: DtoCreateUser): Promise<DtoBaseResponse> {
        const createUser = await this.prismaService.user.create({
            data: newUser
        });

        if(!createUser){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Usuario creado.'

        return baseResponse;
    }

    async putUser(user: DtoEditUser): Promise<DtoBaseResponse> {
        const editUser = await this.prismaService.user.update({
            data: {
                nameUser: user.nameUser,
                lastnameUser: user.lastnameUser,
                active: user.active
            },
            where: {
                idUser: user.idUser
            }
        });

        if(!editUser){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Usuario Editado.'

        return baseResponse;
    }

    async deleteUser(id: string): Promise<DtoBaseResponse> {
        const deleteUser = await this.prismaService.user.delete({
            where: {
                idUser: Number(id)
            }
        });

        if(!deleteUser){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Usuario Eliminado.'

        return baseResponse;
    }
}
