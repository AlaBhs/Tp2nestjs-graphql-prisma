import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Type } from 'class-transformer';
import { CvCreateWithoutUserInput } from './cv-create-without-user.input';

@InputType()
export class CvCreateOrConnectWithoutUserInput {

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => CvCreateWithoutUserInput, {nullable:false})
    @Type(() => CvCreateWithoutUserInput)
    create!: CvCreateWithoutUserInput;
}
