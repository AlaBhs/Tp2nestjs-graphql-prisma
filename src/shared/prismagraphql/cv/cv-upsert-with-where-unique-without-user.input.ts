import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Type } from 'class-transformer';
import { CvUpdateWithoutUserInput } from './cv-update-without-user.input';
import { CvCreateWithoutUserInput } from './cv-create-without-user.input';

@InputType()
export class CvUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => CvUpdateWithoutUserInput, {nullable:false})
    @Type(() => CvUpdateWithoutUserInput)
    update!: CvUpdateWithoutUserInput;

    @Field(() => CvCreateWithoutUserInput, {nullable:false})
    @Type(() => CvCreateWithoutUserInput)
    create!: CvCreateWithoutUserInput;
}
