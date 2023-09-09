import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

export class UserResolver {
  
  constructor (private readonly user: UserService) {
   this.user = user; 
  }

  @Query('users')
  async users() {
    return this.user.getUsers();
  }
}
