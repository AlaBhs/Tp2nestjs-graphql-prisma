import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillUpdateWithoutCvsInput } from './skill-update-without-cvs.input';

@InputType()
export class SkillUpdateWithWhereUniqueWithoutCvsInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

    @Field(() => SkillUpdateWithoutCvsInput, {nullable:false})
    @Type(() => SkillUpdateWithoutCvsInput)
    data!: SkillUpdateWithoutCvsInput;
}
