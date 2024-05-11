import { registerEnumType } from '@nestjs/graphql';

export enum SkillScalarFieldEnum {
    id = "id",
    designation = "designation"
}


registerEnumType(SkillScalarFieldEnum, { name: 'SkillScalarFieldEnum', description: undefined })
