import { IsNumber, IsString } from "class-validator";


export class DtoCreateUser {
    @IsString()
    nameUser: string;
    @IsString()
    lastnameUser: string;
    @IsString()
    password: string;
    @IsNumber()
    rolId: number;
}

export class DtoEditUser extends DtoCreateUser{
    @IsNumber()
    idUser: number;
}