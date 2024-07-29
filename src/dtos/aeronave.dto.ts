import { IsNumber, IsString } from "class-validator";

export class DtoCreateAeronave {
    @IsString()
    aeronave: string;
    @IsNumber()
    inventarioId: number;
    @IsString()
    workOrder: string;
}

export class DtoUpdateAeronave extends DtoCreateAeronave {
    @IsNumber()
    idAeronave: number;
}