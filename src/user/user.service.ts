import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(createUserInput: Prisma.UserCreateInput) {
    return await this.databaseService.user.create({
      data : createUserInput
    });
  }

  async findAll() {
    return this.databaseService.user.findMany({});
  }

  async findOne(id: string) {
    const user = await this.databaseService.user.findFirst({where : {id : id }});

    if(!user){
      throw new NotFoundException(`There is no user with id ${id}`);
    }
    
    return user;
  }

  async update(id: string, updateUserInput: Prisma.UserUpdateInput) {
    const user = await this.databaseService.user.findFirst({where : {id : id }});
    
    if(!user){
      throw new NotFoundException(`There is no user with id ${id}`);
    }

    return await this.databaseService.user.update({where : {id : id},
    data : updateUserInput});
  }

  async remove(id: string) {
    const user = await this.databaseService.user.findFirst({where : {id : id}});
    if(!user){
      throw new NotFoundException(`There is no user with id ${id}`);
    }
    await this.databaseService.user.delete({where : {id : id}});
    return user;
  }
}
