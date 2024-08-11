import { user } from "@prisma/client";

export class DtoBaseResponse {
    success: boolean = true;
    message: string;
    statusCode: number = 200;
}

export class DtoBaseResponseLogin extends DtoBaseResponse {
    userToken: user
}