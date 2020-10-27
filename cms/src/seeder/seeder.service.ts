import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { Page } from '../pages/page.entity';
import { User } from '../users/user.entity';
import pagesSeed from './data/pages.seed';
import usersSeed from './data/users.seed';
import { MenuItem } from '../menu/menuItem.entity';
import menuItemsSeed from './data/menuItems.seed';
import { Settings } from '../settings/settings.entity';
import settingsSeed from './data/settings.seed';

const protect = () => {
  if (process.env.NODE_ENV === 'production') {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
};

@Injectable()
export class SeederService {
  constructor(
    private connection: Connection,
    @InjectRepository(Page)
    private readonly pageRepository: Repository<Page>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(MenuItem)
    private readonly menuItemRepository: Repository<MenuItem>,
    @InjectRepository(Settings)
    private readonly settingsRepository: Repository<Settings>,
  ) {}

  async clear(): Promise<void> {
    protect();
    await this.connection.dropDatabase();
  }

  async init(): Promise<void> {
    protect();
    await this.connection.synchronize();
  }

  async seed(): Promise<void> {
    protect();
    await this.userRepository.save(usersSeed);
    await this.pageRepository.save(pagesSeed);
    await this.menuItemRepository.save(menuItemsSeed);
    await this.settingsRepository.save(settingsSeed);
  }
}
