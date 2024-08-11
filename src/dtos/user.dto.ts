import { IsBoolean, IsNumber, IsString } from "class-validator";


export class BodyLogin {
    @IsString()
    nameUser: string;
    @IsString()
    password: string;
}

export class DtoCreateUser {
    @IsString()
    nameUser: string;
    @IsString()
    lastnameUser: string;
    @IsString()
    password: string;
    @IsNumber()
    rolId: number;
    @IsBoolean()
    active: boolean;
}

export class DtoEditUser extends DtoCreateUser{
    @IsNumber()
    idUser: number;
}