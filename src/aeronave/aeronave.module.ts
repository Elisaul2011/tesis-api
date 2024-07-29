import { Module } from '@nestjs/common';
import { AeronaveController } from './aeronave.controller';
import { AeronaveService } from './aeronave.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AeronaveController],
  providers: [AeronaveService, PrismaService]
})
export class AeronaveModule {}
