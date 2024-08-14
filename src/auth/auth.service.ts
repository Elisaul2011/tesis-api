import { BadRequestException, Injectable } from '@nestjs/common';
import { user } from '@prisma/client';
import { DtoBaseResponseLogin } from 'src/dtos/base-response';
import { baseResponse } from 'src/dtos/baseResponse';
import { BodyLogin } from 'src/dtos/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService){}

    async postAuthenticade(userLogin: BodyLogin): Promise<DtoBaseResponseLogin>{
        const auth = await this.prismaService.user.findFirst({
            where: {
                nameUser: userLogin.nameUser,
                password: userLogin.password,
            },
            include: {
                roles: true
            }
        });

        
        const responseAuth: DtoBaseResponseLogin =  {
            userToken: {} as user,
            ...baseResponse
        };

        if (!auth) {
            responseAuth.message = 'Usuario o contraseña incorrectos';
            responseAuth.statusCode = 400;
            responseAuth.success = false;
            return responseAuth;
        }

        if (auth.active == false) {
            responseAuth.message = 'Usuario Inactivo';
            responseAuth.statusCode = 400;
            responseAuth.success = false;
            return responseAuth;
        }

        responseAuth.message = `Bienvenido ${auth.nameUser}`;
        responseAuth.userToken = auth;

        return responseAuth;
    }
}
