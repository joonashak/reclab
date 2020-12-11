import api from './api';

export const login = async (username: string, password: string): Promise<any> => {
  const res = await api.post('/auth/login', { username, password });
  return res;
};

export const validateToken = async (token: string): Promise<boolean> => {
  try {
    await api.get('/auth/validate', token);
    return true;
  } catch (error) {
    return false;
  }
};
