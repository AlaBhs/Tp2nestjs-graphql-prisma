import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvWhereInput } from './cv-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { SkillListRelationFilter } from '../skill/skill-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class CvWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [CvWhereInput], {nullable:true})
    AND?: Array<CvWhereInput>;

    @Field(() => [CvWhereInput], {nullable:true})
    OR?: Array<CvWhereInput>;

    @Field(() => [CvWhereInput], {nullable:true})
    NOT?: Array<CvWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    job?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => SkillListRelationFilter, {nullable:true})
    skills?: SkillListRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
