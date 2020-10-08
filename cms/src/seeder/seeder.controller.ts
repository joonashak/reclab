import { Controller, Get } from '@nestjs/common';
import { SeederService } from "./seeder.service";

@Controller('seeder')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Get('clear')
  clear(): Promise<void> {
    return this.seederService.clear();
  }

  @Get('seed')
  seed(): Promise<void> {
    return this.seederService.seed();
  }

  @Get('reset')
  async reset(): Promise<void> {
    await this.seederService.clear();
    await this.seederService.seed();
  }
}
