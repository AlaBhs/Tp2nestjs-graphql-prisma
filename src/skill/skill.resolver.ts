import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { Prisma } from '@prisma/client';
import { Skill, SkillCreateInput, SkillUpdateInput } from 'src/shared/prismagraphql/skill';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Mutation(() => Skill)
  createSkill(
    @Args({name : 'skillCreateInput' , type : () => SkillCreateInput}) skillCreateInput : Prisma.SkillCreateInput) : Promise<Skill>
   {
    return this.skillService.create(skillCreateInput);
  }

  @Query(() => [Skill])
  findAllSkills() {
    return this.skillService.findAll();
  }

  @Query(() => Skill, { name: 'skill' })
  findOneSkill(@Args('id', { type: () => Int }) id: string) {
    return this.skillService.findOne(id);
  }

  @Mutation(() => Skill)
  updateSkill(
    @Args('id') id : string ,
    @Args({name : 'updateSkillInput' , type : () => SkillUpdateInput}) updateSkillInput: Prisma.SkillUpdateInput) {
    return this.skillService.update(id, updateSkillInput);
  }

  @Mutation(() => Skill)
  removeSkill(@Args('id', { type: () => Int }) id: string) {
    return this.skillService.remove(id);
  }
}
