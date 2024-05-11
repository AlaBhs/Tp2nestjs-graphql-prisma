import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';

@InputType()
export class UserUncheckedCreateWithoutCvsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => RoleType, {nullable:false})
    role!: keyof typeof RoleType;
}
