import { Module } from '@nestjs/common';
import { AeronaveController } from './aeronave.controller';
import { AeronaveService } from './aeronave.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { HistorialService } from 'src/historial/historial.service';
import { AppService } from 'src/app.service';

@Module({
  controllers: [AeronaveController],
  providers: [AeronaveService, PrismaService, HistorialService, AppService]
})
export class AeronaveModule {}
