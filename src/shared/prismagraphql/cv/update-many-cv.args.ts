import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CvUpdateManyMutationInput } from './cv-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CvWhereInput } from './cv-where.input';

@ArgsType()
export class UpdateManyCvArgs {

    @Field(() => CvUpdateManyMutationInput, {nullable:false})
    @Type(() => CvUpdateManyMutationInput)
    data!: CvUpdateManyMutationInput;

    @Field(() => CvWhereInput, {nullable:true})
    @Type(() => CvWhereInput)
    where?: CvWhereInput;
}
