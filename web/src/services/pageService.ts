import api from './api';

// FIXME:
// eslint-disable-next-line
export const getAll = async (token: string): Promise<any[]> => {
  const res = await api.get('/page', token);
  return res.data;
};
