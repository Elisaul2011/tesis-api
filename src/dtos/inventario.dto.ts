import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateInventario {
    @IsNumber()
    almacenesId: number;
    @IsString()
    pn: string;
    @IsString()
    descripcion: string;
    @IsNumber()
    tipoComponenteId: number;
    @IsString()
    sn: string;
    @IsNumber()
    cantidad: number;
    @IsString()
    lote: string;
    @IsNumber()
    estadoId: number;
    @IsDate()
    shelfLife: Date;
    @IsString()
    order: string;
}

export class DtoUpdateInventario extends DtoCreateInventario {
    @IsNumber()
    idInventario: number;
}