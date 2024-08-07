import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DtoBaseResponseLogin } from 'src/dtos/base-response';
import { BodyLogin } from 'src/dtos/user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('login')
    async authenticade(@Body() userLogin: BodyLogin): Promise<DtoBaseResponseLogin> {
        return await this.authService.postAuthenticade(userLogin);
    }
}
