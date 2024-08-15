import { Injectable } from '@nestjs/common';
import { notificaciones } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NotificationsService {
    constructor(private prismaService: PrismaService){}

    async getNotifications(idUser: string): Promise<notificaciones[]> {
        return await this.prismaService.notificaciones.findMany({
            where: {
                sendTo: Number(idUser)
            },
            include: {
                userAlmacen: true,
                userSolitited: true
            }
        })
    }
}
