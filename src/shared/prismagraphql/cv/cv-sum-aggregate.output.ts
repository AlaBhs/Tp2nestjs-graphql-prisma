import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CvSumAggregate {

    @Field(() => Int, {nullable:true})
    age?: number;
}
