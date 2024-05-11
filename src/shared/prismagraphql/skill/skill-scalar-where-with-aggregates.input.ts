import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SkillScalarWhereWithAggregatesInput {

    @Field(() => [SkillScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SkillScalarWhereWithAggregatesInput>;

    @Field(() => [SkillScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SkillScalarWhereWithAggregatesInput>;

    @Field(() => [SkillScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SkillScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    designation?: StringWithAggregatesFilter;
}
