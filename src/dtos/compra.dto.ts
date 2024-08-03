import { IsDate, IsNumber, IsString } from "class-validator"

export class DtoCreateCompra {
    @IsString()
    ordenCompra: string;
    @IsDate()
    Fecha: Date
    @IsNumber()
    cantidad: number;
    @IsString()
    pn: string;
    @IsString()
    descripcion: string;
    @IsString()
    sn: string
}

export class DtoUpdateCompra extends DtoCreateCompra {
    @IsNumber()
    idOrdenCompra: number;
}