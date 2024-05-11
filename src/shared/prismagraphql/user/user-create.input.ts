import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { CvCreateNestedManyWithoutUserInput } from '../cv/cv-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => RoleType, {nullable:false})
    role!: keyof typeof RoleType;

    @Field(() => CvCreateNestedManyWithoutUserInput, {nullable:true})
    cvs?: CvCreateNestedManyWithoutUserInput;
}
