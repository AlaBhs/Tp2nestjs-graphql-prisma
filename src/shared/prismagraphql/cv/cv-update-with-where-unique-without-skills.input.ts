import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Type } from 'class-transformer';
import { CvUpdateWithoutSkillsInput } from './cv-update-without-skills.input';

@InputType()
export class CvUpdateWithWhereUniqueWithoutSkillsInput {

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => CvUpdateWithoutSkillsInput, {nullable:false})
    @Type(() => CvUpdateWithoutSkillsInput)
    data!: CvUpdateWithoutSkillsInput;
}