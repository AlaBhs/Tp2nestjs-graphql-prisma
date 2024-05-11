import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCvsInput } from '../user/user-create-nested-one-without-cvs.input';

@InputType()
export class CvCreateWithoutSkillsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    job!: string;

    @Field(() => UserCreateNestedOneWithoutCvsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCvsInput;
}
