import { IsNumber, IsString } from "class-validator";

export class DtoCreateHistorial {
    @IsString()
    description:             string;
    @IsString()
    pn:                      string;
    @IsString()
    sn:                      string;
    @IsNumber()
    cantidad:                number;
    @IsNumber()
    madeBy:                  number;
    @IsNumber()
    tipoMovimientoId:        number;
    @IsNumber()
    estadoId:                number;
    @IsString()
    orderHistorial:          string;   
}

export class DtoUpdateHistorial extends DtoCreateHistorial {
    @IsNumber()
    idHistorial: number;
}