import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CvCreateManyUserInput } from './cv-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CvCreateManyUserInputEnvelope {

    @Field(() => [CvCreateManyUserInput], {nullable:false})
    @Type(() => CvCreateManyUserInput)
    data!: Array<CvCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
