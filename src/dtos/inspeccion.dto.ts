import { IsBoolean, IsNumber, IsString } from "class-validator";

export class DtoCreateInspeccion {
    @IsNumber()
    inventarioId: number;
    @IsString()
    orderInsp: string
}

export class DtoUpdateInspeccion{
    @IsNumber()
    idInventario: number;
    @IsString()
    orderInspect: string;
    @IsNumber()
    inspectecBy: number;
    @IsBoolean()
    active: boolean;
}