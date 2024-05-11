import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { Type } from 'class-transformer';
import { SkillCreateWithoutCvsInput } from './skill-create-without-cvs.input';

@InputType()
export class SkillCreateOrConnectWithoutCvsInput {

    @Field(() => SkillWhereUniqueInput, {nullable:false})
    @Type(() => SkillWhereUniqueInput)
    where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

    @Field(() => SkillCreateWithoutCvsInput, {nullable:false})
    @Type(() => SkillCreateWithoutCvsInput)
    create!: SkillCreateWithoutCvsInput;
}
