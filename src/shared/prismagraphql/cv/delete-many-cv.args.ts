import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvWhereInput } from './cv-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCvArgs {

    @Field(() => CvWhereInput, {nullable:true})
    @Type(() => CvWhereInput)
    where?: CvWhereInput;
}
