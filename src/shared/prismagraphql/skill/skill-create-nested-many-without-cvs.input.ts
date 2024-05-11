import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutCvsInput } from './skill-create-without-cvs.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutCvsInput } from './skill-create-or-connect-without-cvs.input';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedManyWithoutCvsInput {

    @Field(() => [SkillCreateWithoutCvsInput], {nullable:true})
    @Type(() => SkillCreateWithoutCvsInput)
    create?: Array<SkillCreateWithoutCvsInput>;

    @Field(() => [SkillCreateOrConnectWithoutCvsInput], {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutCvsInput)
    connectOrCreate?: Array<SkillCreateOrConnectWithoutCvsInput>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SkillWhereUniqueInput, 'id'>>;
}
