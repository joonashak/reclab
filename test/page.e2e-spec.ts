import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import initializeApp from './utils/initializeApp';
import { apiPages } from './utils/apiData';

describe('/page', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initializeApp();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/page')
      .expect(200)
      .expect(apiPages);
  });

  afterEach(async () => {
    await app.close();
  });
});
