import {
  Body,
  Controller,
  Post,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PublicUserDto } from './dto/public-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<PublicUserDto> {
    const newUser = await this.usersService.create(createUserDto);
    const { passwordHash, ...res } = newUser;
    return res;
  }

  /**
   * Create initial user without being logged in if the user table is empty.
   * @param createUserDto
   */
  @Post('initial')
  async createInitialUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<PublicUserDto> {
    if ((await this.usersService.findAll()).length) {
      throw new HttpException(
        'User table already populated.',
        HttpStatus.FORBIDDEN,
      );
    }

    const newUser = await this.usersService.create(createUserDto);
    const { username } = newUser;
    return { username };
  }
}
