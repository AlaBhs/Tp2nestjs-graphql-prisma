import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvResolver } from './cv.resolver';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CvResolver, CvService],
})
export class CvModule {}
