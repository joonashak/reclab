import api from './api';

const getAll = async (token: string): Promise<any[]> => {
  const res = await api.get('/page', token);
  console.log('token', token);
  return res.data;
};

const create = async (page: any, token: string): Promise<any> => {
  const res = await api.post('/page', page, token);
  return res;
};

export default {
  getAll,
  create,
};
