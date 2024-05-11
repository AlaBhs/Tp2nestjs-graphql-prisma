import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySkillArgs {

    @Field(() => SkillWhereInput, {nullable:true})
    @Type(() => SkillWhereInput)
    where?: SkillWhereInput;
}
