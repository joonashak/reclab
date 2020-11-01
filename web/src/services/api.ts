import axios from 'axios';

const baseUrl = process.env.GATSBY_CMS_URL;
const makeUrl = (path: string): string => `${baseUrl}/${path.replace(/^\/+/, '')}`;

const get = async (path) => axios.get(makeUrl(path));

const post = async (path, data) => axios.post(makeUrl(path), data);

const put = async (path, data) => axios.put(makeUrl(path), data);

const remove = async (path) => axios.delete(makeUrl(path));

export default {
  get, post, put, remove,
};
