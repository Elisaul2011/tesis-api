import { BadRequestException, Injectable } from '@nestjs/common';
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
                password: userLogin.password
            },
            include: {
                roles: true
            }
        });

        if(!auth){
            throw new BadRequestException('Usuario o contraseña incorrectos.')
        }

        baseResponse.message = `Bienvenido ${auth.nameUser}`

        const returnUserAuth = {
            ...baseResponse,
            userToken: auth
        }

        return returnUserAuth;
    }
}
