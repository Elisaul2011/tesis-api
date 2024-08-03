import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompraService } from './compra.service';
import { ordenCompra } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateCompra, DtoUpdateCompra } from 'src/dtos/compra.dto';

@Controller('compra')
export class CompraController {

    constructor(private compraService: CompraService){}

    @Get()
    async getCompra(): Promise<ordenCompra[]>{
        return await this.compraService.getCompra();
    }

    @Post()
    async postCompra(@Body() bodyCompra: DtoCreateCompra): Promise<DtoBaseResponse>{
        return await this.compraService.postCompra(bodyCompra);
    }

    @Put()
    async putCompra(@Body() bodyCompra: DtoUpdateCompra): Promise<DtoBaseResponse>{
        return await this.compraService.putCompra(bodyCompra);
    }

    @Delete('/:id')
    async deleteCompra(@Param('id') idOrdenCompra: string): Promise<DtoBaseResponse>{
        return await this.compraService.deleteCompra(idOrdenCompra);
    }

}
