import localforage from 'localforage';

const key = 'authToken';

const setToken = (token: string) => localforage.setItem(key, token);
const getToken = (): Promise<string> => localforage.getItem(key);

export default {
  setToken,
  getToken,
};
