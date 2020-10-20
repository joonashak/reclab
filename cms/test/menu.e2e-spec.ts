import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import initializeApp from './utils/initializeApp';
import { apiMenu } from './utils/apiData';

describe('/menu', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initializeApp();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/menu')
      .expect(200)
      .expect(apiMenu);
  });

  afterEach(async () => {
    await app.close();
  });
});
