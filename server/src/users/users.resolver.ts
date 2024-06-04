import { Resolver, Query, Args, Root, ResolveField } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { User } from '@prisma/client';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @ResolveField()
  async articles(@Root() user: User) {
    return this.usersService.findOne(user.username).articles();
  }

  @ResolveField()
  async likes(@Root() user: User) {
    return this.usersService.findOne(user.username).likes();
  }

  @ResolveField()
  comments(@Root() user: User) {
    return this.usersService.findOne(user.username).comments();
  }

  @Query('users')
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Query('user')
  findOne(@Args('username') username: string) {
    return this.usersService.findOne(username);
  }
}
