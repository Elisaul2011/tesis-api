import { Module } from '@nestjs/common';
import { NecesidadesTecnicasController } from './necesidades-tecnicas.controller';
import { NecesidadesTecnicasService } from './necesidades-tecnicas.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [NecesidadesTecnicasController],
  providers: [NecesidadesTecnicasService, PrismaService]
})
export class NecesidadesTecnicasModule {}
