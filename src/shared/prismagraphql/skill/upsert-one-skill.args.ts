import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillCreateInput } from './skill-create.input';
import { SkillUpdateInput } from './skill-update.input';

@ArgsType()
export class UpsertOneSkillArgs {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

    @Field(() => SkillCreateInput, {nullable:false})
    @Type(() => SkillCreateInput)
    create!: SkillCreateInput;

    @Field(() => SkillUpdateInput, {nullable:false})
    @Type(() => SkillUpdateInput)
    update!: SkillUpdateInput;
}
