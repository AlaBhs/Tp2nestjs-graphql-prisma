import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCvInput } from './dto/create-cv.input';
import { UpdateCvInput } from './dto/update-cv.input';
import {v4 as uuid} from 'uuid';
import { DatabaseService } from 'src/database/database.service'; 
import { Skill } from 'src/shared/prismagraphql/skill';
import { disconnect } from 'process';

@Injectable()
export class CvService {
  
  constructor(private readonly databaseService : DatabaseService){}

  async findAll() {
    return await this.databaseService.cv.findMany({include : { skills : true , user : true}});
  }

  async findOne(id : string) {
    const cv = await this.databaseService.cv.findUnique({where : {id} , include : { skills : true , user : true}});
    if(!cv){
      throw new NotFoundException(`Le CV d'id ${id} ne se trouve pas.`);
    }
    return cv;
  }

  async create(createCvInput: CreateCvInput) {
    const {name , age , job , userId , skills} = createCvInput;

    const cv_id = uuid();

    const user = this.databaseService.user.findUnique({where : {id : userId}});
    if(!user){
      throw new NotFoundException(`There is no user with id ${userId}`);
    }

    const newcv = await this.databaseService.cv.create({
      data: {
        id: cv_id,
        name : name,
        age : age,
        job : job,
        user : {connect : {id : userId}}
      },include : {user : true , skills : true}
    });

  

    for(let skill of skills){
      const result = this.databaseService.skill.findUnique({where : {id : skill}});
      if(!result){
        throw new NotFoundException(`there is no skill with id ${skill}`);
      }
      else {
        await this.databaseService.cv.update({where : {id : cv_id},
           data : { skills: {
            connect : {
              id : skill
            }
           } },
          include : {skills : true}
          })
      }
    }

      return this.findOne(cv_id) ;
  } 

  async update(id: string, updateCvInput: UpdateCvInput) {
    const {name , age , job ,  skills} = updateCvInput;
    const cv = this.databaseService.cv.findUnique({where : {id : id}});
    console.log(cv);
    if(!cv){
      throw new NotFoundException(`There is no Cv with id ${id}`);
    }

    await this.databaseService.cv.update({where : {id : id} , 
    data : {
      name : name,
      age : age,
      job : job,
      skills : {set : []}
    }});


    for(let skill of skills){
      const result = this.databaseService.skill.findUnique({where : {id : skill}});
      if(!result){
        throw new NotFoundException(`there is no skill with id ${skill}`);
      }
      else {
        await this.databaseService.cv.update({where : {id : id},
          data : { skills: {
           connect : {
             id : skill
           }
          } }
         })
      }
    }

    return this.findOne(id);
  } 

  async remove(id: string) {
    const cv = await this.findOne(id);

    if(!cv){
      throw new NotFoundException(`There is no cv with id ${id}`);
    }
    
    await this.databaseService.cv.delete({where : {id : id}});

    return cv;
  }


} 