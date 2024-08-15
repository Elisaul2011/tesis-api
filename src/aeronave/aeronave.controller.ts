import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AeronaveService } from './aeronave.service';
import { aeronave } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateAeronave, DtoUpdateAeronave } from 'src/dtos/aeronave.dto';

@Controller('aeronave')
export class AeronaveController {

    constructor(private aeronaveService: AeronaveService){}

    @Get()
    async getAeronave(): Promise<aeronave[]> {
        return await this.aeronaveService.getAeronave();
    }

    // @Post()
    // async postAeronave(@Body() newAeronave: DtoCreateAeronave): Promise<DtoBaseResponse>{
    //     return await this.aeronaveService.postAeronave(newAeronave);
    // }

    @Put()
    async putAeronave(@Body() inventario: DtoUpdateAeronave): Promise<DtoBaseResponse>{
        return await this.aeronaveService.putAeronave(inventario);
    }

    @Delete('/:id')
    async deleteAeronave(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.aeronaveService.deleteAeronave(id);
    }

}
