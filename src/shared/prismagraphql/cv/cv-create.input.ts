import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SkillCreateNestedManyWithoutCvsInput } from '../skill/skill-create-nested-many-without-cvs.input';
import { UserCreateNestedOneWithoutCvsInput } from '../user/user-create-nested-one-without-cvs.input';

@InputType()
export class CvCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    job!: string;

    @Field(() => SkillCreateNestedManyWithoutCvsInput, {nullable:true})
    skills?: SkillCreateNestedManyWithoutCvsInput;

    @Field(() => UserCreateNestedOneWithoutCvsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCvsInput;
}
