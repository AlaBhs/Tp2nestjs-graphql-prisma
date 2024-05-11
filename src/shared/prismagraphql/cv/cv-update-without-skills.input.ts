import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutCvsNestedInput } from '../user/user-update-one-required-without-cvs-nested.input';

@InputType()
export class CvUpdateWithoutSkillsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    age?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    job?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutCvsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCvsNestedInput;
}
