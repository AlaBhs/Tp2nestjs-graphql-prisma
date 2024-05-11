import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SkillCreateWithoutCvsInput } from './skill-create-without-cvs.input';
import { Type } from 'class-transformer';
import { SkillCreateOrConnectWithoutCvsInput } from './skill-create-or-connect-without-cvs.input';
import { SkillUpsertWithWhereUniqueWithoutCvsInput } from './skill-upsert-with-where-unique-without-cvs.input';
import { Prisma } from '@prisma/client';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateWithWhereUniqueWithoutCvsInput } from './skill-update-with-where-unique-without-cvs.input';
import { SkillUpdateManyWithWhereWithoutCvsInput } from './skill-update-many-with-where-without-cvs.input';
import { SkillScalarWhereInput } from './skill-scalar-where.input';

@InputType()
export class SkillUpdateManyWithoutCvsNestedInput {

    @Field(() => [SkillCreateWithoutCvsInput], {nullable:true})
    @Type(() => SkillCreateWithoutCvsInput)
    create?: Array<SkillCreateWithoutCvsInput>;

    @Field(() => [SkillCreateOrConnectWithoutCvsInput], {nullable:true})
    @Type(() => SkillCreateOrConnectWithoutCvsInput)
    connectOrCreate?: Array<SkillCreateOrConnectWithoutCvsInput>;

    @Field(() => [SkillUpsertWithWhereUniqueWithoutCvsInput], {nullable:true})
    @Type(() => SkillUpsertWithWhereUniqueWithoutCvsInput)
    upsert?: Array<SkillUpsertWithWhereUniqueWithoutCvsInput>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SkillWhereUniqueInput, 'id'>>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SkillWhereUniqueInput, 'id'>>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SkillWhereUniqueInput, 'id'>>;

    @Field(() => [SkillWhereUniqueInput], {nullable:true})
    @Type(() => SkillWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SkillWhereUniqueInput, 'id'>>;

    @Field(() => [SkillUpdateWithWhereUniqueWithoutCvsInput], {nullable:true})
    @Type(() => SkillUpdateWithWhereUniqueWithoutCvsInput)
    update?: Array<SkillUpdateWithWhereUniqueWithoutCvsInput>;

    @Field(() => [SkillUpdateManyWithWhereWithoutCvsInput], {nullable:true})
    @Type(() => SkillUpdateManyWithWhereWithoutCvsInput)
    updateMany?: Array<SkillUpdateManyWithWhereWithoutCvsInput>;

    @Field(() => [SkillScalarWhereInput], {nullable:true})
    @Type(() => SkillScalarWhereInput)
    deleteMany?: Array<SkillScalarWhereInput>;
}
