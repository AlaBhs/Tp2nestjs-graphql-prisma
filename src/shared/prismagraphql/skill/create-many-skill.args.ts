import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillCreateManyInput } from './skill-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySkillArgs {

    @Field(() => [SkillCreateManyInput], {nullable:false})
    @Type(() => SkillCreateManyInput)
    data!: Array<SkillCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
