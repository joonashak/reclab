import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { expect } from 'chai';
import initializeApp from './utils/initializeApp';

describe('/auth/login', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initializeApp();
  });

  it('Can login with valid credentials.', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'admin', password: '1234' })
      .expect(201);

    expect(res.body).to.have.property('accessToken');
  });

  const testInvalidLogin = data =>
    request(app.getHttpServer())
      .post('/auth/login')
      .send(data)
      .expect(401);

  it('Cannot login with invalid or missing credentials.', () =>
    testInvalidLogin({}));

  it('Cannot login with username only.', () =>
    testInvalidLogin({ username: 'admin' }));

  it('Cannot login with password only.', () =>
    testInvalidLogin({ password: '1234' }));

  it('Cannot login with an empty username.', () =>
    testInvalidLogin({ username: '', password: '1234' }));

  it('Cannot login with an empty password.', () =>
    testInvalidLogin({ username: 'admin', password: '' }));

  it('Cannot login with a wrong username.', () =>
    testInvalidLogin({ username: 'admi', password: '1234' }));

  it('Cannot login with a wrong password.', () =>
    testInvalidLogin({ username: 'admin', password: '12345' }));

  afterEach(async () => {
    await app.close();
  });
});
