import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Type } from 'class-transformer';
import { CvUpdateWithoutSkillsInput } from './cv-update-without-skills.input';
import { CvCreateWithoutSkillsInput } from './cv-create-without-skills.input';

@InputType()
export class CvUpsertWithWhereUniqueWithoutSkillsInput {

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => CvUpdateWithoutSkillsInput, {nullable:false})
    @Type(() => CvUpdateWithoutSkillsInput)
    update!: CvUpdateWithoutSkillsInput;

    @Field(() => CvCreateWithoutSkillsInput, {nullable:false})
    @Type(() => CvCreateWithoutSkillsInput)
    create!: CvCreateWithoutSkillsInput;
}
