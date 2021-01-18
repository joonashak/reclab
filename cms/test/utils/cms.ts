import * as supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import initializeApp from './initializeApp';

export class Cms {
  app: INestApplication;
  token: string;

  /**
   * Initialize new CMS test instance.
   * 
   * Typically used in `beforeEach`.
   */
  init = async (): Promise<void> => {
    this.app = await initializeApp();
  };

  /**
   * Close active CMS instance.
   * 
   * Must be called before initializing new CMS instances, typically in `afterEach`.
   */
  close = async (): Promise<void> => this.app.close();

  private server = (): supertest.SuperTest<supertest.Test> =>
    supertest(this.app.getHttpServer());

  /**
   * Enter authenticated mode.
   * 
   * Requests made while in authenticated mode will include authentication headers.
   * Use `Cms.unauthenticate()` to exit.
   */
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
