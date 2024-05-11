import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvCreateWithoutUserInput } from './cv-create-without-user.input';
import { Type } from 'class-transformer';
import { CvCreateOrConnectWithoutUserInput } from './cv-create-or-connect-without-user.input';
import { CvCreateManyUserInputEnvelope } from './cv-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';

@InputType()
export class CvCreateNestedManyWithoutUserInput {

    @Field(() => [CvCreateWithoutUserInput], {nullable:true})
    @Type(() => CvCreateWithoutUserInput)
    create?: Array<CvCreateWithoutUserInput>;

    @Field(() => [CvCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CvCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CvCreateOrConnectWithoutUserInput>;

    @Field(() => CvCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CvCreateManyUserInputEnvelope)
    createMany?: CvCreateManyUserInputEnvelope;

    @Field(() => [CvWhereUniqueInput], {nullable:true})
    @Type(() => CvWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CvWhereUniqueInput, 'id'>>;
}
