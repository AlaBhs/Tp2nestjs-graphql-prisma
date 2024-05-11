import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvWhereInput } from './cv-where.input';

@InputType()
export class CvListRelationFilter {

    @Field(() => CvWhereInput, {nullable:true})
    every?: CvWhereInput;

    @Field(() => CvWhereInput, {nullable:true})
    some?: CvWhereInput;

    @Field(() => CvWhereInput, {nullable:true})
    none?: CvWhereInput;
}
