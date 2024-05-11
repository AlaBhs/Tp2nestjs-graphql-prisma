import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => RoleType, {nullable:true})
    role?: keyof typeof RoleType;
}
