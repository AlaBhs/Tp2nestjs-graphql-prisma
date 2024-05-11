import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvWhereInput } from './cv-where.input';
import { Type } from 'class-transformer';
import { CvOrderByWithRelationInput } from './cv-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CvWhereUniqueInput } from './cv-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CvCountAggregateInput } from './cv-count-aggregate.input';
import { CvAvgAggregateInput } from './cv-avg-aggregate.input';
import { CvSumAggregateInput } from './cv-sum-aggregate.input';
import { CvMinAggregateInput } from './cv-min-aggregate.input';
import { CvMaxAggregateInput } from './cv-max-aggregate.input';

@ArgsType()
export class CvAggregateArgs {

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

    @Field(() => CvCountAggregateInput, {nullable:true})
    _count?: CvCountAggregateInput;

    @Field(() => CvAvgAggregateInput, {nullable:true})
    _avg?: CvAvgAggregateInput;

    @Field(() => CvSumAggregateInput, {nullable:true})
    _sum?: CvSumAggregateInput;

    @Field(() => CvMinAggregateInput, {nullable:true})
    _min?: CvMinAggregateInput;

    @Field(() => CvMaxAggregateInput, {nullable:true})
    _max?: CvMaxAggregateInput;
}
