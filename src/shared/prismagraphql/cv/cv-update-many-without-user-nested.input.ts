import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvCreateWithoutUserInput } from './cv-create-without-user.input';
import { Type } from 'class-transformer';
import { CvCreateOrConnectWithoutUserInput } from './cv-create-or-connect-without-user.input';
import { CvUpsertWithWhereUniqueWithoutUserInput } from './cv-upsert-with-where-unique-without-user.input';
import { CvCreateManyUserInputEnvelope } from './cv-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { CvUpdateWithWhereUniqueWithoutUserInput } from './cv-update-with-where-unique-without-user.input';
import { CvUpdateManyWithWhereWithoutUserInput } from './cv-update-many-with-where-without-user.input';
import { CvScalarWhereInput } from './cv-scalar-where.input';

@InputType()
export class CvUpdateManyWithoutUserNestedInput {

    @Field(() => [CvCreateWithoutUserInput], {nullable:true})
    @Type(() => CvCreateWithoutUserInput)
    create?: Array<CvCreateWithoutUserInput>;

    @Field(() => [CvCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CvCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CvCreateOrConnectWithoutUserInput>;

    @Field(() => [CvUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CvUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CvUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CvCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CvCreateManyUserInputEnvelope)
    createMany?: CvCreateManyUserInputEnvelope;

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

    @Field(() => [CvUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CvUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CvUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CvUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CvUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CvUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CvScalarWhereInput], {nullable:true})
    @Type(() => CvScalarWhereInput)
    deleteMany?: Array<CvScalarWhereInput>;
}
