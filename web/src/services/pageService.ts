import api from './api';

const getAll = async (token: string): Promise<any[]> => {
  const res = await api.get('/page', token);
  return res.data;
};

export default {
  getAll,
};
