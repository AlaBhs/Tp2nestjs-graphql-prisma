import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCvsInput } from './user-create-without-cvs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCvsInput } from './user-create-or-connect-without-cvs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutCvsInput {

    @Field(() => UserCreateWithoutCvsInput, {nullable:true})
    @Type(() => UserCreateWithoutCvsInput)
    create?: UserCreateWithoutCvsInput;

    @Field(() => UserCreateOrConnectWithoutCvsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCvsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCvsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
