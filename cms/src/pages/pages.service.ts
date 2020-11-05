import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
  ) {}

  async findOne(id: string): Promise<Page> {
    return this.pagesRepository.findOne(id);
  }

  async findAll(): Promise<Page[]> {
    return this.pagesRepository.find();
  }

  async findAllPublic(): Promise<Page[]> {
    // Jos SO ei vastaa, niin voi ratkaista tallentamalla relaation molempiin suuntiin luontivaiheessa.
    // https://stackoverflow.com/questions/64124414/join-self-referencing-relation-both-ways-with-typeorm
    return this.pagesRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.translations', 'translations')
      .select(['page', 'translations.language', 'translations.path'])
      .where('page.isPublic = true')
      .getMany();
  }

  async create(page: Partial<Page>): Promise<Page> {
    return this.pagesRepository.save(page);
  }
}
