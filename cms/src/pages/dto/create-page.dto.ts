import { Page } from '../page.entity';

export class CreatePageDto extends Page {
  translationIds: [string]
}