import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CvCountAggregate } from './cv-count-aggregate.output';
import { CvAvgAggregate } from './cv-avg-aggregate.output';
import { CvSumAggregate } from './cv-sum-aggregate.output';
import { CvMinAggregate } from './cv-min-aggregate.output';
import { CvMaxAggregate } from './cv-max-aggregate.output';

@ObjectType()
export class CvGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    job!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => CvCountAggregate, {nullable:true})
    _count?: CvCountAggregate;

    @Field(() => CvAvgAggregate, {nullable:true})
    _avg?: CvAvgAggregate;

    @Field(() => CvSumAggregate, {nullable:true})
    _sum?: CvSumAggregate;

    @Field(() => CvMinAggregate, {nullable:true})
    _min?: CvMinAggregate;

    @Field(() => CvMaxAggregate, {nullable:true})
    _max?: CvMaxAggregate;
}
