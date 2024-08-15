import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { notificaciones } from '@prisma/client';

@Controller('notifications')
export class NotificationsController {

    constructor(private notificationServices: NotificationsService){}

    @Get('/:id')
    async getNotifications(@Param('id') idUser: string): Promise<notificaciones[]> {
        return await this.notificationServices.getNotifications(idUser);
    }
}
