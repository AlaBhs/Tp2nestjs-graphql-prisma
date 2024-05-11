import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CvOrderByRelationAggregateInput } from '../cv/cv-order-by-relation-aggregate.input';

@InputType()
export class SkillOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    designation?: keyof typeof SortOrder;

    @Field(() => CvOrderByRelationAggregateInput, {nullable:true})
    cvs?: CvOrderByRelationAggregateInput;
}
