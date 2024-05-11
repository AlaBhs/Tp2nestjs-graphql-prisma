import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvWhereInput } from './cv-where.input';
import { Type } from 'class-transformer';
import { CvOrderByWithRelationInput } from './cv-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CvScalarFieldEnum } from './cv-scalar-field.enum';

@ArgsType()
export class FindManyCvArgs {

    @Field(() => CvWhereInput, {nullable:true})
    @Type(() => CvWhereInput)
    where?: CvWhereInput;

    @Field(() => [CvOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CvOrderByWithRelationInput>;

    @Field(() => CvWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CvWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CvScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CvScalarFieldEnum>;
}
