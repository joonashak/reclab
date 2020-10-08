import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = createUserDto.username;
    user.passwordHash = await hash(createUserDto.password, 12)

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ username });
  }

  /**
   * Same as findOne but includes `passwordHash` in the result.
   * To be used only in authentication!
   */
  findOneWithPasswordHash(username: string): Promise<User> {
    return this.usersRepository.createQueryBuilder('user')
      .addSelect('user.passwordHash')
      .where({ username })
      .getOne();
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
