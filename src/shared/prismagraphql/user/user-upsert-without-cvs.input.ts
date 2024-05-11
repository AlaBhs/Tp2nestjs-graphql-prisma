import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCvsInput } from './user-update-without-cvs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCvsInput } from './user-create-without-cvs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCvsInput {

    @Field(() => UserUpdateWithoutCvsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCvsInput)
    update!: UserUpdateWithoutCvsInput;

    @Field(() => UserCreateWithoutCvsInput, {nullable:false})
    @Type(() => UserCreateWithoutCvsInput)
    create!: UserCreateWithoutCvsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
