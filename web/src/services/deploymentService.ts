import api from './api';

const deploy = async (token: string): Promise<void> => {
  await api.get('/deployment', token);
};

export default { deploy };
