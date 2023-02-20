import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
  async getHello(){
    return "Hello"; 
  }
  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {id,},
    });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async create(User){
    const newUser = await this.userModel.create<User>(User);
    console.log(newUser);
    return newUser;
  }

  async  reading(): Promise<User[]> {
    return await this.userModel.findAll();
}

async update(body, upID) {
  return await this.userModel.update(body,{
    where: {
      id : upID
    }
  });
}

  async delete(delID): Promise<any> {
    return await this.userModel.destroy({
      where:{ id : delID}
    });
} 

}