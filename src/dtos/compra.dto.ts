import { Transform } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator"

export class DtoCreateCompra {
    @IsString()
    ordenCompra: string;
    @Transform(({ value }) => new Date(value))
    @IsDate()
    fecha: Date
    @IsNumber()
    cantidad: number;
    @IsString()
    pn: string;
    @IsString()
    descripcion: string;
    @IsString()
    sn: string;
    @IsString()
    proveedor: string;
}

export class DtoUpdateCompra extends DtoCreateCompra {
    @IsNumber()
    idOrdenCompra: number;
}