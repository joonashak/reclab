import axios from 'axios';

const baseUrl = process.env.GATSBY_CMS_URL;
const makeUrl = (path: string): string => `${baseUrl}/${path.replace(/^\/+/, '')}`;

const config = (token: string) => (token ? { headers: { Authorization: `Bearer ${token}` } } : {});

const get = async (path: string, token = null) => axios.get(makeUrl(path), config(token));

const post = async (path: string, data, token = null) => axios.post(
  makeUrl(path),
  data,
  config(token),
);

const put = async (path: string, data, token = null) => axios.put(
  makeUrl(path),
  data,
  config(token),
);

const remove = async (path: string, token = null) => axios.delete(makeUrl(path), config(token));

export default {
  get,
  post,
  put,
  remove,
};
