/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

interface Person {
  name: string,
  age: number,
  hello: string,
  desc: string
}
@Injectable()
export class AppService {
  getHello(id: string): Person {
    return {
      name: 'carlos',
      age: 22,
      hello: '你好',
      desc: `我是客户端请求的id:${id}`
    };
  }
}
