import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSkillOrThrowArgs {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
