import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HistorialService } from './historial.service';
import { historial } from '@prisma/client';
import { DtoCreateHistorial, DtoUpdateHistorial } from 'src/dtos/historial.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('historial')
export class HistorialController {

    constructor(private historialService: HistorialService){}

    @Get()
    async getHistorial(): Promise<historial[]> {
        return await this.historialService.getHistorial();
    }

    @Post()
    async postHistorial(@Body() newHistorial: DtoCreateHistorial): Promise<DtoBaseResponse>{
        return await this.historialService.postHistorial(newHistorial);
    }

}
