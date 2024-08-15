import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { tallerreparacion } from '@prisma/client';
import { TallerReparacionService } from './taller-reparacion.service';
import { DtoCreateTallerReparacion, DtoUpdateTallerReparacion } from 'src/dtos/taller-reparacion.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('taller-reparacion')
export class TallerReparacionController {

    constructor(private tallerReparacionService: TallerReparacionService){}

    @Get()
    async getTaller(): Promise<tallerreparacion[]> {
        return await this.tallerReparacionService.getTaller();
    }

    // @Post()
    // async postTaller(@Body() newTaller: DtoCreateTallerReparacion): Promise<DtoBaseResponse>{
    //     return await this.tallerReparacionService.postTaller(newTaller);
    // }

    @Put()
    async putTaller(@Body() tallerReparacion: DtoUpdateTallerReparacion): Promise<DtoBaseResponse>{
        return await this.tallerReparacionService.putTaller(tallerReparacion);
    }

    @Delete('/:id')
    async deleteTaller(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.tallerReparacionService.deleteTaller(id);
    }

}
