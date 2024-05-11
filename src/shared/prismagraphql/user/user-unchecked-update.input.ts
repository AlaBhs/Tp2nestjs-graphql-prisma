import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleTypeFieldUpdateOperationsInput } from '../prisma/enum-role-type-field-update-operations.input';
import { CvUncheckedUpdateManyWithoutUserNestedInput } from '../cv/cv-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleTypeFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleTypeFieldUpdateOperationsInput;

    @Field(() => CvUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    cvs?: CvUncheckedUpdateManyWithoutUserNestedInput;
}
