import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvCreateWithoutSkillsInput } from './cv-create-without-skills.input';
import { Type } from 'class-transformer';
import { CvCreateOrConnectWithoutSkillsInput } from './cv-create-or-connect-without-skills.input';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';

@InputType()
export class CvUncheckedCreateNestedManyWithoutSkillsInput {

    @Field(() => [CvCreateWithoutSkillsInput], {nullable:true})
    @Type(() => CvCreateWithoutSkillsInput)
    create?: Array<CvCreateWithoutSkillsInput>;

    @Field(() => [CvCreateOrConnectWithoutSkillsInput], {nullable:true})
    @Type(() => CvCreateOrConnectWithoutSkillsInput)
    connectOrCreate?: Array<CvCreateOrConnectWithoutSkillsInput>;

    @Field(() => [CvWhereUniqueInput], {nullable:true})
    @Type(() => CvWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CvWhereUniqueInput, 'id'>>;
}
