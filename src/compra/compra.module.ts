
import { Module } from '@nestjs/common';
import { CompraController } from './compra.controller';
import { CompraService } from './compra.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CompraController],
  providers: [CompraService, PrismaService]
})
export class CompraModule {}
