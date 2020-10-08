import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneWithPasswordHash(username);

    if (user && (await compare(password, user.passwordHash))) {
      const { passwordHash, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.username };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
