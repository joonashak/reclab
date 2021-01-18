import { INestApplication } from '@nestjs/common';
import initializeApp from './utils/initializeApp';
import { apiPages } from './utils/apiData';
import { server } from './utils/common';
import { Request } from './utils/request';

describe('/page', () => {
  //let app: INestApplication;
  const req = new Request()

  beforeEach(async () => {
    //app = await initializeApp();
    await req.init()
  });

  it('/ (GET)', async () => {
    const res = await req.get('/page');

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
    await req.close()
  });
});
