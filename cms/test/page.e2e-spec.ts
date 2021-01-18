import { INestApplication } from '@nestjs/common';
import initializeApp from './utils/initializeApp';
import { apiPages } from './utils/apiData';
import { server } from './utils/common';
import { Cms } from './utils/request';

describe('/page', () => {
  //let app: INestApplication;
  const cms = new Cms()

  beforeEach(async () => {
    //app = await initializeApp();
    await cms.init()
  });

  it('/ (GET)', async () => {
    const res = await cms.get('/page');
    await cms.authenticate()

    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining(apiPages.filter(p => p.isPublic)),
    );
  });
/*
  it('/ (POST)', async () => {
    const authResult = await server(app)
      .post('/auth/login')
      .send({ username: 'admin', password: '1234' });

    const { accessToken } = authResult.body;

    const testPage = {
      title: 'Test Page',
      content: 'Lorem ipsum...',
      language: 'en',
      isPublic: true,
      path: '/test',
      translationIds: [],
    };

    const postResult = await server(app)
      .post('/page')
      .send(testPage)
      .set('Authorization', `Bearer ${accessToken}`)

    expect(postResult.status).toBe(201);

    const { id, createdAt, ...testablePage } = postResult.body;

    expect(testablePage).toEqual({
      title: 'Test Page',
      content: 'Lorem ipsum...',
      language: 'en',
      isPublic: true,
      path: '/test',
      author: {
        id: 'adc86188-4c93-4993-864e-91a6c129ff8a',
      },
      translations: [],
      updatedAt: null,
    });
  });
*/
  afterEach(async () => {
    //await app.close();
    await cms.close()
  });
});
