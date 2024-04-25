import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'user',
      password: 'pass',
    },
    {
      id: 2,
      username: 'user2',
      password: 'pass',
    },
  ];

  create(createUserInput: CreateUserInput) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserInput,
    };

    this.users.push(newUser);

    console.log(this.users);

    return newUser;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
