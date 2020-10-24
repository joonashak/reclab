import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { SeederController } from './seeder.controller';
import { Page } from '../pages/page.entity';
import { User } from '../users/user.entity';
import { MenuItem } from '../menu/menuItem.entity';
import { Settings } from '../settings/settings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page, User, MenuItem, Settings])],
  providers: [SeederService],
  controllers: [SeederController],
})
export class SeederModule {}
