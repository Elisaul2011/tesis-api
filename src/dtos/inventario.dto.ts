import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateInventario {
    @IsNumber()
    almacenesId: number;
    @IsNumber()
    zonaId: number;
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
    @IsString()
    fabricante: string;
    @IsNumber()
    estadoId: number;
    @IsDate()
    shelfLife: Date;
    @IsString()
    order: string;
    @IsNumber()
    idAta: number;
    @IsNumber()
    idHorasManuales: number;
}

export class DtoUpdateInventario extends DtoCreateInventario {
    @IsNumber()
    idInventario: number;
}