import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvUpdateInput } from './cv-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';

@ArgsType()
export class UpdateOneCvArgs {

    @Field(() => CvUpdateInput, {nullable:false})
    @Type(() => CvUpdateInput)
    data!: CvUpdateInput;

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;
}
