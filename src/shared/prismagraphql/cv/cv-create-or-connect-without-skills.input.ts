import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Type } from 'class-transformer';
import { CvCreateWithoutSkillsInput } from './cv-create-without-skills.input';

@InputType()
export class CvCreateOrConnectWithoutSkillsInput {

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => CvCreateWithoutSkillsInput, {nullable:false})
    @Type(() => CvCreateWithoutSkillsInput)
    create!: CvCreateWithoutSkillsInput;
}
