import { apiMenu } from './utils/apiData';
import { Cms } from './utils/cms';

describe('/menu', () => {
  const cms = new Cms();

  beforeEach(async () => {
    await cms.init();
  });

  it('/ (GET)', async () => {
    const res = await cms.get('/menu');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(apiMenu);
  });

  afterEach(async () => {
    await cms.close();
  });
});
