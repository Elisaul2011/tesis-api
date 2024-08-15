import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NotificationsController],
  providers: [NotificationsService, PrismaService]
})
export class NotificationsModule {}