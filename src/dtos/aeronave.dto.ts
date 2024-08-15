import { IsNumber, IsString } from "class-validator";

export class DtoCreateAeronave {
    @IsNumber()
    inventarioId: number;
    @IsNumber()
    madeBy: number;
}

export class DtoUpdateAeronave extends DtoCreateAeronave {
    @IsNumber()
    idAeronave: number;
}