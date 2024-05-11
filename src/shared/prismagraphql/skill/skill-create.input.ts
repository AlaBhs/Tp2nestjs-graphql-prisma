import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvCreateNestedManyWithoutSkillsInput } from '../cv/cv-create-nested-many-without-skills.input';

@InputType()
export class SkillCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    designation!: string;

    @Field(() => CvCreateNestedManyWithoutSkillsInput, {nullable:true})
    cvs?: CvCreateNestedManyWithoutSkillsInput;
}
