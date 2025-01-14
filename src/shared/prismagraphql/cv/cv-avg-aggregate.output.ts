import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CvAvgAggregate {

    @Field(() => Float, {nullable:true})
    age?: number;
}
