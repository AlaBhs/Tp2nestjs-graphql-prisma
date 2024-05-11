import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from './role-type.enum';

@InputType()
export class EnumRoleTypeFieldUpdateOperationsInput {

    @Field(() => RoleType, {nullable:true})
    set?: keyof typeof RoleType;
}
