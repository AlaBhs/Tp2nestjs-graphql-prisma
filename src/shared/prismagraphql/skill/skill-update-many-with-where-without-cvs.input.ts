import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillScalarWhereInput } from './skill-scalar-where.input';
import { Type } from 'class-transformer';
import { SkillUpdateManyMutationInput } from './skill-update-many-mutation.input';

@InputType()
export class SkillUpdateManyWithWhereWithoutCvsInput {

    @Field(() => SkillScalarWhereInput, {nullable:false})
    @Type(() => SkillScalarWhereInput)
    where!: SkillScalarWhereInput;

    @Field(() => SkillUpdateManyMutationInput, {nullable:false})
    @Type(() => SkillUpdateManyMutationInput)
    data!: SkillUpdateManyMutationInput;
}
