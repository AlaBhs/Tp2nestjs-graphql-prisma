import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SkillUpdateInput } from './skill-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@ArgsType()
export class UpdateOneSkillArgs {

    @Field(() => SkillUpdateInput, {nullable:false})
    @Type(() => SkillUpdateInput)
    data!: SkillUpdateInput;

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
