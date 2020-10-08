import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItem } from './menuItem.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  findAll(): Promise<MenuItem[]> {
    return this.menuService.findAll();
  }
}
