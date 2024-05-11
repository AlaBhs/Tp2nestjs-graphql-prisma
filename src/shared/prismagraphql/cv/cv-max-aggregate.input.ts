import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CvMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    age?: true;

    @Field(() => Boolean, {nullable:true})
    job?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;
}
