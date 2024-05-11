import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';

@InputType()
export class SkillListRelationFilter {

    @Field(() => SkillWhereInput, {nullable:true})
    every?: SkillWhereInput;

    @Field(() => SkillWhereInput, {nullable:true})
    some?: SkillWhereInput;

    @Field(() => SkillWhereInput, {nullable:true})
    none?: SkillWhereInput;
}
