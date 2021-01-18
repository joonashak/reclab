import { Cms } from './utils/cms';

describe('/auth/login', () => {
  const cms = new Cms();

  beforeEach(async () => {
    await cms.init();
  });

  it('Can login with valid credentials.', async () => {
    const res = await cms.post('/auth/login', {
      username: 'admin',
      password: '1234',
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('accessToken');
  });

  const testInvalidLogin = async (data) => {
    const res = await cms.post('/auth/login', data);
    expect(res.status).toBe(401);
  };

  it('Cannot login with invalid or missing credentials.', () =>
    testInvalidLogin({}));

  it('Cannot login with username only.', () =>
    testInvalidLogin({ username: 'admin' }));

  it('Cannot login with password only.', () =>
    testInvalidLogin({ password: '1234' }));

  it('Cannot login with an empty username.', () =>
    testInvalidLogin({ username: '', password: '1234' }));

  it('Cannot login with an empty password.', () =>
    testInvalidLogin({ username: 'admin', password: '' }));

  it('Cannot login with a wrong username.', () =>
    testInvalidLogin({ username: 'admi', password: '1234' }));

  it('Cannot login with a wrong password.', () =>
    testInvalidLogin({ username: 'admin', password: '12345' }));

  afterEach(async () => {
    await cms.close();
  });
});
