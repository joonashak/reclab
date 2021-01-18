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

export class Request {
  app: INestApplication;

  init = async () => {
    this.app = await initializeApp();
  };

  close = async () => this.app.close();

  get = async url => supertest(this.app.getHttpServer()).get(url);
}
