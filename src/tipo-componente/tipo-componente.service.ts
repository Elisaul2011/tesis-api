import { Injectable } from '@nestjs/common';
import { tipocomponente } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoComponenteService {
    
    constructor(private prismaService: PrismaService) { }

    async getTipoComponente(): Promise<tipocomponente[]> {
        return await this.prismaService.tipocomponente.findMany();
    }

}
