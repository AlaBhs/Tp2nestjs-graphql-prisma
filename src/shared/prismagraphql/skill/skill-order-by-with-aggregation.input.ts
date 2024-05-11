import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SkillCountOrderByAggregateInput } from './skill-count-order-by-aggregate.input';
import { SkillMaxOrderByAggregateInput } from './skill-max-order-by-aggregate.input';
import { SkillMinOrderByAggregateInput } from './skill-min-order-by-aggregate.input';

@InputType()
export class SkillOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    designation?: keyof typeof SortOrder;

    @Field(() => SkillCountOrderByAggregateInput, {nullable:true})
    _count?: SkillCountOrderByAggregateInput;

    @Field(() => SkillMaxOrderByAggregateInput, {nullable:true})
    _max?: SkillMaxOrderByAggregateInput;

    @Field(() => SkillMinOrderByAggregateInput, {nullable:true})
    _min?: SkillMinOrderByAggregateInput;
}
