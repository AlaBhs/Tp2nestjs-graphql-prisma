import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvCreateWithoutSkillsInput } from './cv-create-without-skills.input';
import { Type } from 'class-transformer';
import { CvCreateOrConnectWithoutSkillsInput } from './cv-create-or-connect-without-skills.input';
import { CvUpsertWithWhereUniqueWithoutSkillsInput } from './cv-upsert-with-where-unique-without-skills.input';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { CvUpdateWithWhereUniqueWithoutSkillsInput } from './cv-update-with-where-unique-without-skills.input';
import { CvUpdateManyWithWhereWithoutSkillsInput } from './cv-update-many-with-where-without-skills.input';
import { CvScalarWhereInput } from './cv-scalar-where.input';

@InputType()
export class CvUpdateManyWithoutSkillsNestedInput {

    @Field(() => [CvCreateWithoutSkillsInput], {nullable:true})
    @Type(() => CvCreateWithoutSkillsInput)
    create?: Array<CvCreateWithoutSkillsInput>;

    @Field(() => [CvCreateOrConnectWithoutSkillsInput], {nullable:true})
    @Type(() => CvCreateOrConnectWithoutSkillsInput)
    connectOrCreate?: Array<CvCreateOrConnectWithoutSkillsInput>;

    @Field(() => [CvUpsertWithWhereUniqueWithoutSkillsInput], {nullable:true})
    @Type(() => CvUpsertWithWhereUniqueWithoutSkillsInput)
    upsert?: Array<CvUpsertWithWhereUniqueWithoutSkillsInput>;

    @Field(() => [CvWhereUniqueInput], {nullable:true})
    @Type(() => CvWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CvWhereUniqueInput, 'id'>>;

    @Field(() => [CvWhereUniqueInput], {nullable:true})
    @Type(() => CvWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CvWhereUniqueInput, 'id'>>;

    @Field(() => [CvWhereUniqueInput], {nullable:true})
    @Type(() => CvWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CvWhereUniqueInput, 'id'>>;

    @Field(() => [CvWhereUniqueInput], {nullable:true})
    @Type(() => CvWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CvWhereUniqueInput, 'id'>>;

    @Field(() => [CvUpdateWithWhereUniqueWithoutSkillsInput], {nullable:true})
    @Type(() => CvUpdateWithWhereUniqueWithoutSkillsInput)
    update?: Array<CvUpdateWithWhereUniqueWithoutSkillsInput>;

    @Field(() => [CvUpdateManyWithWhereWithoutSkillsInput], {nullable:true})
    @Type(() => CvUpdateManyWithWhereWithoutSkillsInput)
    updateMany?: Array<CvUpdateManyWithWhereWithoutSkillsInput>;

    @Field(() => [CvScalarWhereInput], {nullable:true})
    @Type(() => CvScalarWhereInput)
    deleteMany?: Array<CvScalarWhereInput>;
}
