import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { User, UserCreateInput, UserUpdateInput } from 'src/shared/prismagraphql/user';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args({name : 'createUserInput' , type:()=>UserCreateInput}) createUserInput: Prisma.UserCreateInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(
      @Args('id') id : string,
      @Args({name : 'updateUserInput' , type:()=> UserUpdateInput}) updateUserInput: Prisma.UserUpdateInput
          ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: string) {
    return this.userService.remove(id);
  }
}
