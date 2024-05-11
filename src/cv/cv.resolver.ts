import { Resolver, Query, Mutation, Args, Parent, ResolveField, Subscription } from '@nestjs/graphql';
import { CvService } from './cv.service';
import { CreateCvInput } from './dto/create-cv.input';
import { UpdateCvInput } from './dto/update-cv.input';
import { PubSub } from "graphql-subscriptions";
import { Cv } from 'src/shared/prismagraphql/cv/cv.model';
import { CvSubscriptionType } from './dto/cv-subscriptiontype';



const pubSub = new PubSub();

@Resolver(() => Cv)
export class CvResolver {
  constructor(
    private readonly cvService: CvService) {

  }

  @Query(returns => [Cv])
  findAll()
   {
    return this.cvService.findAll();
  }

  @Query(returns => Cv)
  findOne(

    @Args('id') id: string
  ) {
    return this.cvService.findOne(id);
  }

  @Mutation(returns => Cv)
  createCv(
    @Args('createCvInput') createCvInput: CreateCvInput
  ) {
    const newcv = this.cvService.create(createCvInput);
    pubSub.publish('cvModified' , { cvModified : { cv : newcv , mutation : "ADD"} });
    return newcv;
  }

  @Mutation(returns => Cv)
  updateCv(

    @Args('id') id : string ,
    @Args('updateCvInput') updateCvInput: UpdateCvInput) {
      const cvadded = this.cvService.update(id , updateCvInput);
      pubSub.publish('cvModified' , { cvModified : { cv : cvadded , mutation : "UPDATE"} });
      return cvadded;
  }

  @Mutation(returns => Cv)
  removeCv(

    @Args('id') id: string
  ) {
    const cvremoved = this.cvService.remove(id);
    pubSub.publish('cvModified' , { cvModified : { cv : cvremoved , mutation : "DELETE"} });
    return cvremoved;
  }

  @Subscription(returns => CvSubscriptionType)
  cvModified(

  ){
    return pubSub.asyncIterator('cvModified');
  }


}
