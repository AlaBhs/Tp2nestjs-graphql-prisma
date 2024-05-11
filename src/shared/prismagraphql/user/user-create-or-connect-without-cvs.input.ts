import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCvsInput } from './user-create-without-cvs.input';

@InputType()
export class UserCreateOrConnectWithoutCvsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutCvsInput, {nullable:false})
    @Type(() => UserCreateWithoutCvsInput)
    create!: UserCreateWithoutCvsInput;
}
