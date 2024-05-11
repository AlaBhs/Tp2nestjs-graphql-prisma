import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillUpdateManyMutationInput } from './skill-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SkillWhereInput } from './skill-where.input';

@ArgsType()
export class UpdateManySkillArgs {

    @Field(() => SkillUpdateManyMutationInput, {nullable:false})
    @Type(() => SkillUpdateManyMutationInput)
    data!: SkillUpdateManyMutationInput;

    @Field(() => SkillWhereInput, {nullable:true})
    @Type(() => SkillWhereInput)
    where?: SkillWhereInput;
}
