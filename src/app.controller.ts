/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
interface Person {
  name: string;
  age: number;
  hello: string;
  desc: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get(':id')
  getHello(@Param('id') id: string): Person {
    return this.appService.getHello(id);
  }
}