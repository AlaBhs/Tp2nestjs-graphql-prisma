import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CvUncheckedUpdateManyWithoutSkillsNestedInput } from '../cv/cv-unchecked-update-many-without-skills-nested.input';

@InputType()
export class SkillUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    designation?: StringFieldUpdateOperationsInput;

    @Field(() => CvUncheckedUpdateManyWithoutSkillsNestedInput, {nullable:true})
    cvs?: CvUncheckedUpdateManyWithoutSkillsNestedInput;
}
