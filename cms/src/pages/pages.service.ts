import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Page } from './page.entity';
import { CreatePageDto } from './dto/create-page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
    private connection: Connection,
  ) {}

  async findOne(id: string): Promise<Page> {
    return this.pagesRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.translations', 'translations')
      .select(['page', 'translations.language', 'translations.path', 'translations.id', 'translations.title'])
      .where({ id })
      .getOne();
  }

  async findMany(ids: string[]): Promise<Page[]> {
    return Promise.all(ids.map(id => this.findOne(id)));
  }

  async findAll(): Promise<Page[]> {
    return this.pagesRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.translations', 'translations')
      .select(['page', 'translations.language', 'translations.path', 'translations.id', 'translations.title'])
      .getMany();
  }

  async findAllPublic(): Promise<Page[]> {
    return this.pagesRepository
      .createQueryBuilder('page')
      .leftJoinAndSelect('page.translations', 'translations')
      .select(['page', 'translations.language', 'translations.path', 'translations.id', 'translations.title'])
      .where('page.isPublic = true')
      .getMany();
  }

  async create(page: CreatePageDto): Promise<Page> {
    const { translationIds, ...newPage } = page;

    // Disallow overwriting existing id.
    const pageExists = !!(await this.findOne(newPage.id));

    if (pageExists) {
      throw new HttpException('Page ID exists.', 403);
    }

    // Load translations.
    const translations = await this.findMany(translationIds);

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

  async update(page: CreatePageDto): Promise<Page> {
    const { id, translationIds, ...newPage } = page;

    newPage.updatedAt = new Date();

    // Some fields cannot be changed.
    delete newPage.author;
    delete newPage.createdAt;

    await this.pagesRepository
      .createQueryBuilder('page')
      .update(Page)
      .set({ ...newPage })
      .where({ id })
      .execute();

    // KISS: Remove all old translations and add current ones, even if same.
    await this.connection.query(
      `
      DELETE FROM translation
      WHERE "originPageId" = $1 OR "targetPageId" = $1
    `,
      [id],
    );

    translationIds.forEach(async translationId => {
      // Remove possible existing translations.
      // TODO: Needs to be filtered by language if this is to handle more than two languages.
      await this.connection.query(
        `
        DELETE FROM translation
        WHERE "originPageId" = $1 OR "targetPageId" = $1
      `,
        [translationId],
      );

      await this.connection.query(
        `
      INSERT INTO translation ("originPageId", "targetPageId")
      VALUES
        ($1, $2),
        ($2, $1)
    `,
        [id, translationId],
      );
    });

    return this.findOne(id);
  }
}
