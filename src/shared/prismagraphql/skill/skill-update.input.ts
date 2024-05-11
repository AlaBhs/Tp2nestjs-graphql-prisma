import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CvUpdateManyWithoutSkillsNestedInput } from '../cv/cv-update-many-without-skills-nested.input';

@InputType()
export class SkillUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    designation?: StringFieldUpdateOperationsInput;

    @Field(() => CvUpdateManyWithoutSkillsNestedInput, {nullable:true})
    cvs?: CvUpdateManyWithoutSkillsNestedInput;
}
