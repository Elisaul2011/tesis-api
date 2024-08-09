import { tipocomponente } from '@prisma/client';
import { Controller, Get } from '@nestjs/common';
import { TipoComponenteService } from './tipo-componente.service';

@Controller('tipo-componente')
export class TipoComponenteController {

    constructor(private tipoComponenteService: TipoComponenteService){}

    @Get()
    async getTipoComponente(): Promise<tipocomponente[]>{
        return await this.tipoComponenteService.getTipoComponente();
    }
}
