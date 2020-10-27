import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Settings } from './settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Settings)
    private readonly settingsRepository: Repository<Settings>,
  ) {}

  /**
   * Get *the* settings row from the database.
   * This method expects to find exactly one row in the settings table and fails otherwise.
   */
  async findAll(): Promise<Settings> {
    const settings = await this.settingsRepository.createQueryBuilder('settings')
      .leftJoin('settings.frontpage', 'frontpage')
      .addSelect(['frontpage.path', 'frontpage.id'])
      .getMany();

    if (settings.length !== 1) {
      throw new HttpException('Expected to find exactly one settings row.', 500);
    }

    return settings[0];
  }
}
