import { Controller, Get, Query } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { Route } from './route.entity';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  findOne(@Query('path') path: string): Promise<Route> {
    return this.routesService.findOne(path);
  }
}
