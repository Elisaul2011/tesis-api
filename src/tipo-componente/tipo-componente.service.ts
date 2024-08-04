import { Injectable } from '@nestjs/common';
import { tipoComponente } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoComponenteService {
    
    constructor(private prismaService: PrismaService) { }

    async getTipoComponente(): Promise<tipoComponente[]> {
        return await this.prismaService.tipoComponente.findMany();
    }

}
