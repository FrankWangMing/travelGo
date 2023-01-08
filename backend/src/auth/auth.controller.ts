import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { SignupInput } from './dto/signup.input';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  async auth(@Res() res) {
    return res.redirect('/auth/cognito');
  }
  @Post('/login')
  async login(@Body() post: LoginInput): Promise<any> {
    const { email, password } = post;
    return await this.authService.login(email, password);
  }

  @Post('/create')
  create(@Body() post: SignupInput): any {
    const { email, password, firstname, lastname } = post;
    return this.authService.createUser({
      email,
      password,
      firstname,
      lastname,
    });
  }
}
