import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvWhereInput } from './cv-where.input';
import { Type } from 'class-transformer';
import { CvOrderByWithAggregationInput } from './cv-order-by-with-aggregation.input';
import { CvScalarFieldEnum } from './cv-scalar-field.enum';
import { CvScalarWhereWithAggregatesInput } from './cv-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CvCountAggregateInput } from './cv-count-aggregate.input';
import { CvAvgAggregateInput } from './cv-avg-aggregate.input';
import { CvSumAggregateInput } from './cv-sum-aggregate.input';
import { CvMinAggregateInput } from './cv-min-aggregate.input';
import { CvMaxAggregateInput } from './cv-max-aggregate.input';

@ArgsType()
export class CvGroupByArgs {

    @Field(() => CvWhereInput, {nullable:true})
    @Type(() => CvWhereInput)
    where?: CvWhereInput;

    @Field(() => [CvOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CvOrderByWithAggregationInput>;

    @Field(() => [CvScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CvScalarFieldEnum>;

    @Field(() => CvScalarWhereWithAggregatesInput, {nullable:true})
    having?: CvScalarWhereWithAggregatesInput;

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
