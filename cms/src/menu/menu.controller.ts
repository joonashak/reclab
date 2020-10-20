import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { pick } from 'lodash';
import { MenuItem } from "./menuItem.entity";

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  async findAll(): Promise<Partial<MenuItem>[]> {
    const menuItems = await this.menuService.findAll();

    return menuItems.map(item =>
      pick(item, [
        'id',
        'title',
        'order',
        'language',
        'path',
        'page.id',
        'page.title',
        'page.language',
        'page.path',
        'parent.id',
      ]),
    );
  }
}
