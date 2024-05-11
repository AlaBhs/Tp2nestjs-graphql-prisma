import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { SkillUpdateManyWithoutCvsNestedInput } from '../skill/skill-update-many-without-cvs-nested.input';
import { UserUpdateOneRequiredWithoutCvsNestedInput } from '../user/user-update-one-required-without-cvs-nested.input';

@InputType()
export class CvUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    age?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    job?: StringFieldUpdateOperationsInput;

    @Field(() => SkillUpdateManyWithoutCvsNestedInput, {nullable:true})
    skills?: SkillUpdateManyWithoutCvsNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCvsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutCvsNestedInput;
}
