import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCvsInput } from './user-create-without-cvs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCvsInput } from './user-create-or-connect-without-cvs.input';
import { UserUpsertWithoutCvsInput } from './user-upsert-without-cvs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutCvsInput } from './user-update-to-one-with-where-without-cvs.input';

@InputType()
export class UserUpdateOneRequiredWithoutCvsNestedInput {

    @Field(() => UserCreateWithoutCvsInput, {nullable:true})
    @Type(() => UserCreateWithoutCvsInput)
    create?: UserCreateWithoutCvsInput;

    @Field(() => UserCreateOrConnectWithoutCvsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCvsInput)
    connectOrCreate?: UserCreateOrConnectWithoutCvsInput;

    @Field(() => UserUpsertWithoutCvsInput, {nullable:true})
    @Type(() => UserUpsertWithoutCvsInput)
    upsert?: UserUpsertWithoutCvsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutCvsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutCvsInput)
    update?: UserUpdateToOneWithWhereWithoutCvsInput;
}
