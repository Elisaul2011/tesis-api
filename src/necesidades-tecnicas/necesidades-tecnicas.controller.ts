import { necesidadesTecnicas } from '@prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { NecesidadesTecnicasService } from './necesidades-tecnicas.service';
import { DtoCreateNecesidades, DtoUpdateNecesidades } from 'src/dtos/necesidades-tecnicas.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('necesidades-tecnicas')
export class NecesidadesTecnicasController {

    constructor(private necesidadesService: NecesidadesTecnicasService){}

    @Get()
    async getNecesidades(): Promise<necesidadesTecnicas[]> {
        return await this.necesidadesService.getNecesidades();
    }

    @Post()
    async postNecesidades(@Body() newNecesidades: DtoCreateNecesidades): Promise<DtoBaseResponse>{
        return await this.necesidadesService.postNecesidades(newNecesidades);
    }

    @Put()
    async putNecesidades(@Body() necesidadesTecnicas: DtoUpdateNecesidades): Promise<DtoBaseResponse>{
        return await this.necesidadesService.putNecesidades(necesidadesTecnicas);
    }

    @Delete('/:id')
    async deleteNecesidades(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.necesidadesService.deleteNecesidades(id);
    }
    
}
