import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvUncheckedCreateNestedManyWithoutSkillsInput } from '../cv/cv-unchecked-create-nested-many-without-skills.input';

@InputType()
export class SkillUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    designation!: string;

    @Field(() => CvUncheckedCreateNestedManyWithoutSkillsInput, {nullable:true})
    cvs?: CvUncheckedCreateNestedManyWithoutSkillsInput;
}
