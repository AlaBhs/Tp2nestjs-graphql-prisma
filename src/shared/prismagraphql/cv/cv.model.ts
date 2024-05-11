import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Skill } from '../skill/skill.model';
import { User } from '../user/user.model';
import { CvCount } from './cv-count.output';

@ObjectType()
export class Cv {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    job!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [Skill], {nullable:true})
    skills?: Array<Skill>;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => CvCount, {nullable:false})
    _count?: CvCount;
}
