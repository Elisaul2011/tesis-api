import { IsNumber, IsString } from "class-validator";

export class DtoCreateNecesidades {
    @IsString()
    pn: string;
    @IsString()
    descripcion: string;
    @IsNumber()
    cantidad: number;
}

export class DtoUpdateNecesidades extends DtoCreateNecesidades {
    @IsNumber()
    idNecesidadesTecnicas: number;
}