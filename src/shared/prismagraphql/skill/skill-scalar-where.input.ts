import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SkillScalarWhereInput {

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    AND?: Array<SkillScalarWhereInput>;

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    OR?: Array<SkillScalarWhereInput>;

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    NOT?: Array<SkillScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    designation?: StringFilter;
}
