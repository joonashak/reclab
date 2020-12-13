import api from './api';

const getAll = async (token: string): Promise<any[]> => {
  const res = await api.get('/page', token);
  return res.data;
};

const create = async (page: any, token: string): Promise<any> => {
  const res = await api.post('/page', page, token);
  return res;
};

const update = async (page: any, token: string): Promise<any> => {
  const res = await api.patch('/page', page, token);
  return res;
};

const remove = async (id: string, token: string): Promise<any> => api.remove('/page', { id }, token);

export default {
  getAll,
  create,
  update,
  remove,
};
