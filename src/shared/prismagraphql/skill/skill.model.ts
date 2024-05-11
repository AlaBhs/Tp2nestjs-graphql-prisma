import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Cv } from '../cv/cv.model';
import { SkillCount } from './skill-count.output';

@ObjectType()
export class Skill {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    designation!: string;

    @Field(() => [Cv], {nullable:true})
    cvs?: Array<Cv>;

    @Field(() => SkillCount, {nullable:false})
    _count?: SkillCount;
}
