import pagesSeed from "./pages.seed";

export default [
  {
    id: '8c4613c5-a8a9-4341-8838-4ac801d2c2f9',
    title: 'Page 1',
    order: 0,
    path: null,
    language: 'en',
    page: pagesSeed[0]
  },
  {
    id: 'f68b04d7-a753-4865-ac2e-429e8b1d6d9f',
    title: 'Page 2',
    order: 1,
    path: null,
    language: 'en',
    page: pagesSeed[1]
  },
  {
    id: '26315387-b87b-4bf1-8554-5eb3183d4860',
    title: 'Sivu 1',
    order: 0,
    path: null,
    language: 'fi',
    page: pagesSeed[2]
  },
  {
    id: '6d54b2b6-b957-4133-a660-c9b030f4b1d0',
    title: 'Sivu 2',
    order: 1,
    path: null,
    language: 'fi',
    page: pagesSeed[3]
  },
  {
    id: '0efd204d-1a0e-4b4a-ba46-676d4b5f0f64',
    title: 'Nested Link',
    order: 2,
    path: '/asd',
    language: 'fi',
    route: null,
    parent: {
      id: '6d54b2b6-b957-4133-a660-c9b030f4b1d0',
    },
  },
];
