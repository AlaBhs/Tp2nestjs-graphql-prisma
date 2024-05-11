import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCvsInput } from './user-update-without-cvs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCvsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCvsInput, {nullable:false})
    @Type(() => UserUpdateWithoutCvsInput)
    data!: UserUpdateWithoutCvsInput;
}
