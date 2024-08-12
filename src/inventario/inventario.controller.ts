import { atas, inventario } from '@prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { DtoAsignInventario, DtoCreateInventario, DtoUpdateInventario } from 'src/dtos/inventario.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('inventario')
export class InventarioController {

    constructor(private inventarioService: InventarioService){}

    @Get()
    async getInventario(): Promise<inventario[]> {
        return await this.inventarioService.getInventario();
    }
    
    @Get('/serviciables')
    async getInventarioServices(): Promise<inventario[]> {
        return await this.inventarioService.getInventarioServices();
    }

    @Get('/atas')
    async getAtas(): Promise<atas[]> {
        return await this.inventarioService.getAtas();
    }

    @Post('/asign')
    async postInventarioOrder(@Body() assign: DtoAsignInventario): Promise<DtoBaseResponse>{
        return await this.inventarioService.postInventarioOrder(assign);
    }

    @Post()
    async postInventario(@Body() newInventario: DtoCreateInventario): Promise<DtoBaseResponse>{
        return await this.inventarioService.postInventario(newInventario);
    }

    @Put()
    async putInventario(@Body() inventario: DtoUpdateInventario): Promise<DtoBaseResponse>{
        return await this.inventarioService.putInventario(inventario);
    }

    @Delete('/:id')
    async deleteInventario(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.inventarioService.deleteInventario(id);
    }
}
