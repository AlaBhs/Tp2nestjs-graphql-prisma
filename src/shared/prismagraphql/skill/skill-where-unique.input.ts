import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillWhereInput } from './skill-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CvListRelationFilter } from '../cv/cv-list-relation-filter.input';

@InputType()
export class SkillWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [SkillWhereInput], {nullable:true})
    AND?: Array<SkillWhereInput>;

    @Field(() => [SkillWhereInput], {nullable:true})
    OR?: Array<SkillWhereInput>;

    @Field(() => [SkillWhereInput], {nullable:true})
    NOT?: Array<SkillWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    designation?: StringFilter;

    @Field(() => CvListRelationFilter, {nullable:true})
    cvs?: CvListRelationFilter;
}
