import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CvCountOrderByAggregateInput } from './cv-count-order-by-aggregate.input';
import { CvAvgOrderByAggregateInput } from './cv-avg-order-by-aggregate.input';
import { CvMaxOrderByAggregateInput } from './cv-max-order-by-aggregate.input';
import { CvMinOrderByAggregateInput } from './cv-min-order-by-aggregate.input';
import { CvSumOrderByAggregateInput } from './cv-sum-order-by-aggregate.input';

@InputType()
export class CvOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    job?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => CvCountOrderByAggregateInput, {nullable:true})
    _count?: CvCountOrderByAggregateInput;

    @Field(() => CvAvgOrderByAggregateInput, {nullable:true})
    _avg?: CvAvgOrderByAggregateInput;

    @Field(() => CvMaxOrderByAggregateInput, {nullable:true})
    _max?: CvMaxOrderByAggregateInput;

    @Field(() => CvMinOrderByAggregateInput, {nullable:true})
    _min?: CvMinOrderByAggregateInput;

    @Field(() => CvSumOrderByAggregateInput, {nullable:true})
    _sum?: CvSumOrderByAggregateInput;
}
