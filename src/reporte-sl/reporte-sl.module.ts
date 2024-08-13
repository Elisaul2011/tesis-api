import { Module } from '@nestjs/common';
import { ReporteSlController } from './reporte-sl.controller';
import { ReporteSlService } from './reporte-sl.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [ReporteSlController],
  providers: [ReporteSlService, PrismaService, AppService]
})
export class ReporteSlModule {}
