import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import initializeApp from './utils/initializeApp';
import { apiPages } from './utils/apiData';

describe('/page', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initializeApp();
  });

  it('/ (GET)', async () => {
    const res = await request(app.getHttpServer()).get('/page');

    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining(apiPages));
  });

  afterEach(async () => {
    await app.close();
  });
});
