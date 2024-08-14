import { DtoBaseResponse } from "./base-response";

export const baseResponse: DtoBaseResponse = {
    message: '',
    statusCode: 200,
    success: true
}

export const badBaseResponse: DtoBaseResponse = {
    message: '',
    statusCode: 400,
    success: false
}