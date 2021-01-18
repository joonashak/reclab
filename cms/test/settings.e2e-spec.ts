import { apiSettings } from './utils/apiData';
import { Cms } from './utils/cms';

describe('/settings', () => {
  const cms = new Cms();

  beforeEach(async () => {
    await cms.init();
  });

  it('/ (GET)', async () => {
    const res = await cms.get('/settings');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(apiSettings);
  });

  afterEach(async () => {
    await cms.close();
  });
});
