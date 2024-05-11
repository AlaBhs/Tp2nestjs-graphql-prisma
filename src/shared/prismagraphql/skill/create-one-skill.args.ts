import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillCreateInput } from './skill-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSkillArgs {

    @Field(() => SkillCreateInput, {nullable:false})
    @Type(() => SkillCreateInput)
    data!: SkillCreateInput;
}
