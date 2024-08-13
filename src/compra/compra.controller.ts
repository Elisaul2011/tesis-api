import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { CompraService } from './compra.service';
import { ordencompra } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response';
import { DtoCreateCompra, DtoUpdateCompra } from 'src/dtos/compra.dto';

@Controller('compra')
export class CompraController {

    constructor(private compraService: CompraService){}

    @Get()
    async getCompra(): Promise<ordencompra[]>{
        return await this.compraService.getCompra();
    }

    @Get('/imprimir')
    async generateExcelInvenory(@Res() res): Promise<void> {

        const buffer = await this.compraService.generateExcelCompra();
        res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
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
