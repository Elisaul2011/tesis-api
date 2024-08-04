import { Module } from '@nestjs/common';
import { TipoComponenteController } from './tipo-componente.controller';
import { TipoComponenteService } from './tipo-componente.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TipoComponenteController],
  providers: [TipoComponenteService, PrismaService]
})
export class TipoComponenteModule {}
