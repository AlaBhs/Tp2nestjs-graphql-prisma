import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvScalarWhereInput } from './cv-scalar-where.input';
import { Type } from 'class-transformer';
import { CvUpdateManyMutationInput } from './cv-update-many-mutation.input';

@InputType()
export class CvUpdateManyWithWhereWithoutUserInput {

    @Field(() => CvScalarWhereInput, {nullable:false})
    @Type(() => CvScalarWhereInput)
    where!: CvScalarWhereInput;

    @Field(() => CvUpdateManyMutationInput, {nullable:false})
    @Type(() => CvUpdateManyMutationInput)
    data!: CvUpdateManyMutationInput;
}
