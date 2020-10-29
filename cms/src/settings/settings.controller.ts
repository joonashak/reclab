import { Controller, Get } from '@nestjs/common';
import { Settings } from './settings.entity';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  findAll(): Promise<Settings> {
    return this.settingsService.findAll();
  }
}
