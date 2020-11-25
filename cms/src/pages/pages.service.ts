import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Page } from './page.entity';
import { CreatePageDto } from './dto/create-page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
  ) {}

  async findOne(id: string): Promise<Page> {
    return this.pagesRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.translations', 'translations')
      .select(['page', 'translations.language', 'translations.path'])
      .where({ id })
      .getOne();
  }

  async findAll(): Promise<Page[]> {
    return this.pagesRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.translations', 'translations')
      .select(['page', 'translations.language', 'translations.path'])
      .getMany();
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

  async create(page: CreatePageDto): Promise<Page> {
    const { translationIds, ...newPage } = page;

    // Load translations.
    const translations = await Promise.all(
      translationIds.map(id => this.findOne(id)),
    );

    const result = await this.pagesRepository.save({
      ...newPage,
      translations,
    });

    // Save translations also the other way around.
    translations.forEach(async translation => {
      const strippedPage = result;
      strippedPage.translations = [];
      translation.translations.push(strippedPage);
      await this.pagesRepository.save(translation);
    });

    return result;
  }
}
