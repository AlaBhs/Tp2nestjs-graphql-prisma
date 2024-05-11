import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Type } from 'class-transformer';
import { CvCreateInput } from './cv-create.input';
import { CvUpdateInput } from './cv-update.input';

@ArgsType()
export class UpsertOneCvArgs {

    @Field(() => CvWhereUniqueInput, {nullable:false})
    @Type(() => CvWhereUniqueInput)
    where!: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => CvCreateInput, {nullable:false})
    @Type(() => CvCreateInput)
    create!: CvCreateInput;

    @Field(() => CvUpdateInput, {nullable:false})
    @Type(() => CvUpdateInput)
    update!: CvUpdateInput;
}
