import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRoleTypeFieldUpdateOperationsInput } from '../prisma/enum-role-type-field-update-operations.input';
import { CvUpdateManyWithoutUserNestedInput } from '../cv/cv-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRoleTypeFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleTypeFieldUpdateOperationsInput;

    @Field(() => CvUpdateManyWithoutUserNestedInput, {nullable:true})
    cvs?: CvUpdateManyWithoutUserNestedInput;
}
