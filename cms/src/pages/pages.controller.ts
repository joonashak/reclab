import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { PagesService } from './pages.service';
import { Page } from './page.entity';
import { JwtOptionalAuthGuard } from '../auth/jwt-opt-auth.guard';
import { REQUEST } from '@nestjs/core';
import { User } from '../users/user.entity';
import UserDecorator from '../users/user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('page')
export class PagesController {
  constructor(
    private readonly pagesService: PagesService,
    @Inject(REQUEST) private request: Request,
  ) {}

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Page> {
    return this.pagesService.findOne(id);
  }

  @UseGuards(JwtOptionalAuthGuard)
  @Get()
  findAll(@UserDecorator() user: User): Promise<Page[]> {
    return user
      ? this.pagesService.findAll()
      : this.pagesService.findAllPublic();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() page: Partial<Page>,
    @UserDecorator() user: User,
  ): Promise<Page> {
    page.createdAt = new Date();
    page.author = { id: user.id };
    return this.pagesService.create(page);
  }
}
