import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class SkillService {

  constructor(private readonly databaseService : DatabaseService){}

  async create(skillCreateInput: Prisma.SkillCreateInput) { 
    return this.databaseService.skill.create({
      data : skillCreateInput
    });
  }

  async findAll() {
    return await this.databaseService.skill.findMany({include : { cvs : true}});
  }

  async findOne(id: string) {
    const skill = await this.databaseService.skill.findFirst({where : {id : id}});
    if(!skill){
      throw new NotFoundException(`There is no skill with id ${id}`);
    }
    return skill;
  }

  async update(id: string, updateSkillInput: Prisma.SkillUpdateInput) {
    const skill = await this.databaseService.skill.findFirst({where : {id : id}});
    if(!skill){
      throw new NotFoundException(`There is no skill with id ${id}`);
    }
    return await this.databaseService.skill.update({where : {id : id},
      data : updateSkillInput
    });
  }

  async remove(id: string) {
    const skill = await this.databaseService.skill.findFirst({where : {id : id}});
    if(!skill){
      throw new NotFoundException(`There is no skill with id ${id}`);
    }
    await this.databaseService.skill.delete({where : {id : id}});
    return skill;
  }
}
