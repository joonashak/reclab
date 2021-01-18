import * as supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import initializeApp from './initializeApp';

/*
export class Request {
  app: INestApplication;

  constructor(app: INestApplication) {
    this.app = app;
  }

  get = async (url: string): Promise<request.Response> =>
    request(this.app.getHttpServer()).get(url);
  /*
  async get(url: string) {
    return request(this.app.getHttpServer()).get(url)
  }
}
*/

export class Cms {
  app: INestApplication;
  token: string;

  init = async (): Promise<void> => {
    this.app = await initializeApp();
  };

  close = async (): Promise<void> => this.app.close();

  server = (): supertest.SuperTest<supertest.Test> =>
    supertest(this.app.getHttpServer());

  authenticate = async (): Promise<void> => {
    const response = await this.server()
      .post('/auth/login')
      .send({ username: 'admin', password: '1234' });

    this.token = response.body.accessToken;

    if (!this.token) {
      throw new Error('Login failed.');
    }
  };

  get = async (url: string): Promise<supertest.Response> =>
    supertest(this.app.getHttpServer()).get(url);
}
