import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import initializeApp from './utils/initializeApp';
import { apiSettings } from './utils/apiData';

describe('/settings', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initializeApp();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/settings')
      .expect(200)
      .expect(apiSettings);
  });

  afterEach(async () => {
    await app.close();
  });
});
