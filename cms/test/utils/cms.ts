import * as supertest from 'supertest';
import { INestApplication } from '@nestjs/common';
import initializeApp from './initializeApp';

export class Cms {
  app: INestApplication;
  authenticationHeader: any;

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

    const token = response.body.accessToken;

    if (!token) {
      throw new Error('Login failed.');
    }

    this.authenticationHeader = { Authorization: `Bearer ${token}` };
  };

  /**
   * Exit authenticated mode.
   */
  unauthenticate = async (): Promise<void> => {
    this.authenticationHeader = null;
  };

  // TODO: Implement authentication.
  /**
   * Perform GET request.
   * @param url URL to request against.
   */
  get = async (url: string): Promise<supertest.Response> =>
    this.server().get(url);

  // TODO: Implement unauthenticated request.
  /**
   * Perform POST request.
   * @param url URL to request against.
   * @param data Payload data.
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  post = async (url: string, data: any): Promise<supertest.Response> => {
    return this.server()
      .post(url)
      .send(data)
      .set(this.authenticationHeader);
  };
}
