import { atas, inventario } from '@prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { DtoAsignInventario, DtoCreateInventario, DtoUpdateInventario } from 'src/dtos/inventario.dto';
import { DtoBaseResponse } from 'src/dtos/base-response';

@Controller('inventario')
export class InventarioController {

    constructor(private inventarioService: InventarioService) { }

    @Get()
    async getInventario(): Promise<inventario[]> {
        return await this.inventarioService.getInventario();
    }

    @Get('/serviciables')
    async getInventarioServices(): Promise<inventario[]> {
        return await this.inventarioService.getInventarioServices();
    }
    @Get('/imprimir')
    async generateExcelInvenory(@Res() res): Promise<void> {

        const buffer = await this.inventarioService.generateExcelInvenory();
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    }

    @Get('/atas')
    async getAtas(): Promise<atas[]> {
        return await this.inventarioService.getAtas();
    }

    @Post('/asign')
    async postInventarioOrder(@Body() assign: DtoAsignInventario): Promise<DtoBaseResponse> {
        return await this.inventarioService.postInventarioOrder(assign);
    }

    @Post()
    async postInventario(@Body() newInventario: DtoCreateInventario): Promise<DtoBaseResponse> {
        return await this.inventarioService.postInventario(newInventario);
    }

    @Put()
    async putInventario(@Body() inventario: DtoUpdateInventario): Promise<DtoBaseResponse> {
        return await this.inventarioService.putInventario(inventario);
    }

    @Delete('/:id')
    async deleteInventario(@Param('id') id: string): Promise<DtoBaseResponse> {
        return await this.inventarioService.deleteInventario(id);
    }
}
