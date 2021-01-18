import { apiPages } from './utils/apiData';
import { Cms } from './utils/cms';

describe('/page', () => {
  const cms = new Cms();

  beforeEach(async () => {
    await cms.init();
  });

  it('/ (GET)', async () => {
    const res = await cms.get('/page');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining(apiPages.filter(p => p.isPublic)),
    );
  });

  it('/ (POST)', async () => {
    await cms.authenticate();

    const testPage = {
      title: 'Test Page',
      content: 'Lorem ipsum...',
      language: 'en',
      isPublic: true,
      path: '/test',
      translationIds: [],
    };

    const postResult = await cms.post('/page', testPage);

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

  afterEach(async () => {
    await cms.close();
  });
});
