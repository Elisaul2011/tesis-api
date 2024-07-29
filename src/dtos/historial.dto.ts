import { IsDate, IsNumber, IsString } from "class-validator";

export class DtoCreateHistorial {
    @IsDate()
    fechaMovimiento: Date;
    @IsString()
    pn: string;
    @IsString()
    descripcion: string;
    @IsString()
    sn: string;
    @IsNumber()
    cantidad: number;
    @IsString()
    origen: string;
    @IsString()
    destino: string;
    @IsString()
    realizadoPor: string;
    @IsNumber()
    tipoMovimientoId: number;
    @IsNumber()
    estadoId: number;
    @IsString()
    order: string;
}

export class DtoUpdateHistorial extends DtoCreateHistorial {
    @IsNumber()
    idHistorial: number;
}