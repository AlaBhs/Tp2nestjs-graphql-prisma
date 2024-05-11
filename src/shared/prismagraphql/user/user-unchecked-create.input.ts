import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { CvUncheckedCreateNestedManyWithoutUserInput } from '../cv/cv-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => RoleType, {nullable:false})
    role!: keyof typeof RoleType;

    @Field(() => CvUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    cvs?: CvUncheckedCreateNestedManyWithoutUserInput;
}
