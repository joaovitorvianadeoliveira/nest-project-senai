// import { Controller, Request, Post, UseGuards } from '@nestjs/common';
// import { LocalAuthGuard } from './decorators/local-auth.guard';
// import { ApiOperation, ApiTags } from '@nestjs/swagger';

// @ApiTags('Auth')
// @Controller('auth')
// export class AuthController {
//   @Post('login')
//   @ApiOperation({ summary: 'Logar usúario'})
//   @UseGuards(LocalAuthGuard)
//   async login(@Request() req) {
//     return req.user;
//   }
// }

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './decorators/auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { User } from 'src/user/entities/user.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() loginDto: LoginDto) {
    const user: User = await this.authService.validateUser(loginDto.email, loginDto.password)
    return this.authService.login(user)
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
