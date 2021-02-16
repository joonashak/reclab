const root = '/admin';

const createPathObject = (path, routerPath = null) => ({
  fullPath: [root, path].join(''),
  routerPath: routerPath || path,
});

export default {
  root,
  pages: createPathObject('/pages', '/pages/*'),
  newPage: createPathObject('/pages/new'),
  editPage: createPathObject('/pages/edit'),
  login: createPathObject('/login'),
  docs: createPathObject('/docs'),
};
