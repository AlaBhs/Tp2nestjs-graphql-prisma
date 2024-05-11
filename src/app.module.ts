import { Module } from '@nestjs/common';
import { CvModule } from './cv/cv.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver : ApolloDriver,
    autoSchemaFile : true,
    installSubscriptionHandlers: true,
    subscriptions: {
          'graphql-ws': true,
          'subscriptions-transport-ws': true,
        },
  }),
  CvModule,
  SkillModule,
  UserModule,
  DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
