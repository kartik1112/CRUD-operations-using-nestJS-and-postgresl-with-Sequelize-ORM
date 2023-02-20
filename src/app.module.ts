import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entity/user.entity';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'crudDB',
    models: [User],
    autoLoadModels: true,
    synchronize: true
}), UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
  
})
export class AppModule {}
