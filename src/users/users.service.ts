import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoCreateUser } from 'src/dtos/user.dto';
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

    async postUser(newUser: DtoCreateUser): Promise<DtoBaseResponse> {
        const createUser = await this.prismaService.user.create({
            data: {
                nameUser: newUser.nameUser,
                lastnameUser: newUser.lastnameUser,
                password: newUser.password,
                rolId: newUser.rolId
            }
        });

        if(!createUser){
            throw new BadRequestException('Ha ocurrido un error');
        }

        baseResponse.message = 'Usuario creado.'

        return baseResponse;
    }
}
