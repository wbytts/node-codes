import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get，接收GET请求
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Req
  @Get('/testReq')
  testReq(@Req() request: Request): string {
    return 'test req'
  }
}
