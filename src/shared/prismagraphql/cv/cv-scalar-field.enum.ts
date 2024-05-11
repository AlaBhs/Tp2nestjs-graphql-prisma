import { registerEnumType } from '@nestjs/graphql';

export enum CvScalarFieldEnum {
    id = "id",
    name = "name",
    age = "age",
    job = "job",
    userId = "userId"
}


registerEnumType(CvScalarFieldEnum, { name: 'CvScalarFieldEnum', description: undefined })
