import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor (private seq: Sequelize){}
  getHello(): string {
    return 'Hello World!';
  }
}
