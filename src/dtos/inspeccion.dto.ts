import { IsNumber, IsString } from "class-validator";

export class DtoCreateInspeccion {
    @IsNumber()
    inventarioId: number;
    @IsString()
    orderInsp: string
}

export class DtoUpdateInspeccion extends DtoCreateInspeccion {
    @IsNumber()
    idInspeccion: number;
}