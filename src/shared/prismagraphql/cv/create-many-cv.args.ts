import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvCreateManyInput } from './cv-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCvArgs {

    @Field(() => [CvCreateManyInput], {nullable:false})
    @Type(() => CvCreateManyInput)
    data!: Array<CvCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
