import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class CvScalarWhereInput {

    @Field(() => [CvScalarWhereInput], {nullable:true})
    AND?: Array<CvScalarWhereInput>;

    @Field(() => [CvScalarWhereInput], {nullable:true})
    OR?: Array<CvScalarWhereInput>;

    @Field(() => [CvScalarWhereInput], {nullable:true})
    NOT?: Array<CvScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    job?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
