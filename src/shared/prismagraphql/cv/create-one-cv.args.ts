import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvCreateInput } from './cv-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCvArgs {

    @Field(() => CvCreateInput, {nullable:false})
    @Type(() => CvCreateInput)
    data!: CvCreateInput;
}
