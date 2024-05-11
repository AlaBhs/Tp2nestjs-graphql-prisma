import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SkillUncheckedCreateNestedManyWithoutCvsInput } from '../skill/skill-unchecked-create-nested-many-without-cvs.input';

@InputType()
export class CvUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:false})
    job!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => SkillUncheckedCreateNestedManyWithoutCvsInput, {nullable:true})
    skills?: SkillUncheckedCreateNestedManyWithoutCvsInput;
}
