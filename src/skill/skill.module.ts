import { Module } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillResolver } from './skill.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SkillResolver, SkillService],
})
export class SkillModule {}
