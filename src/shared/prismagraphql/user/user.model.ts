import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { Cv } from '../cv/cv.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => RoleType, {nullable:false})
    role!: keyof typeof RoleType;

    @Field(() => [Cv], {nullable:true})
    cvs?: Array<Cv>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
