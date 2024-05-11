import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class CvScalarWhereWithAggregatesInput {

    @Field(() => [CvScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CvScalarWhereWithAggregatesInput>;

    @Field(() => [CvScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CvScalarWhereWithAggregatesInput>;

    @Field(() => [CvScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CvScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    age?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    job?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
