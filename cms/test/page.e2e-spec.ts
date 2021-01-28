import { apiPages } from './utils/apiData';
import { Cms } from './utils/cms';

const url = '/page';

const testPage = {
  title: 'Test Page',
  content: 'Lorem ipsum...',
  language: 'en',
  isPublic: true,
  path: '/test',
  translationIds: [],
  description: 'test description',
  keywords: 'test keywords',
};

describe('/page', () => {
  const cms = new Cms();

  beforeEach(async () => {
    await cms.init();
  });

  it('/ (GET) returns only public pages when not authenticated', async () => {
    const res = await cms.get(url);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(
      expect.arrayContaining(apiPages.filter(p => p.isPublic)),
    );
  });

  it('/ (GET) returns all pages when authenticated', async () => {
    await cms.authenticate();
    const res = await cms.get(url);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining(apiPages));
  });

  it('/ (POST) unauthenticated user cannot create a page', async () => {
    const res = await cms.post(url, testPage);
    expect(res.status).toBe(401);
  });

  it('/ (POST) create basic page', async () => {
    await cms.authenticate();
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
      description: 'test description',
      keywords: 'test keywords',
    });
  });

  it('/ (PATCH) unauthenticated user cannot edit a page', async () => {
    const res = await cms.patch(url, {
      id: apiPages[0].id,
      title: 'asd',
    });
    expect(res.status).toBe(401);
  });

  it('/ (PATCH) edit page', async () => {
    await cms.authenticate();
    const newPage = await cms.post(url, testPage);
    const { id } = newPage.body;

    const edits = {
      title: 'edited title',
      content: 'edited content',
      language: 'fi',
      isPublic: false,
      path: '/edited',
      description: 'edited description',
      keywords: 'edited keywords',
    };

    const res = await cms.patch(url, { ...edits, id });
    expect(res.status).toBe(200);

    const { id: _, createdAt, updatedAt, ...testablePage } = res.body;
    expect(testablePage).toEqual({
      ...edits,
      translations: [],
    });
  });

  afterEach(async () => {
    await cms.close();
  });
});
