import api from './api';

const login = async (username: string, password: string): Promise<any> => {
  const res = await api.post('/auth/login', { username, password });
  return res;
};

const validateToken = async (token: string): Promise<boolean> => {
  try {
    await api.get('/auth/validate', token);
    return true;
  } catch (error) {
    return false;
  }
};

export default {
  login,
  validateToken,
};
