import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CvAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    age?: true;
}
