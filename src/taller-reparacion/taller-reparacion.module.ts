import { Module } from '@nestjs/common';
import { TallerReparacionController } from './taller-reparacion.controller';
import { TallerReparacionService } from './taller-reparacion.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TallerReparacionController],
  providers: [TallerReparacionService, PrismaService]
})
export class TallerReparacionModule {}
