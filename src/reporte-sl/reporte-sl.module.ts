import { Module } from '@nestjs/common';
import { ReporteSlController } from './reporte-sl.controller';
import { ReporteSlService } from './reporte-sl.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReporteSlController],
  providers: [ReporteSlService, PrismaService]
})
export class ReporteSlModule {}
