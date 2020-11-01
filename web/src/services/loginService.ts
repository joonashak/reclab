import api from './api';

// FIXME:
// eslint-disable-next-line
export const login = async (username: string, password: string): Promise<any> => {
  const res = await api.post('/auth/login', { username, password });
  return res;
};
