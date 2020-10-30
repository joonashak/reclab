import api from './api';

const login = async (username: string, password: string): Promise<any> => {
  const res = await api.post('/auth/login', { username, password });
  return res;
};

export default {
  login,
};
