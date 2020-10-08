import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Page } from "./page.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  providers: [PagesService],
  controllers: [PagesController]
})
export class PagesModule {}
