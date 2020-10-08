import pagesSeed from "./pages.seed";

export default [
  {
    id: '26315387-b87b-4bf1-8554-5eb3183d4860',
    title: 'Link 1',
    order: 0,
    path: null,
    language: 'fi',
    page: pagesSeed[0]
  },
  {
    id: '6d54b2b6-b957-4133-a660-c9b030f4b1d0',
    title: 'Link 2',
    order: 1,
    path: null,
    language: 'fi',
    page: pagesSeed[1]
  },
  {
    id: '0efd204d-1a0e-4b4a-ba46-676d4b5f0f64',
    title: 'Nested Link',
    order: 1,
    path: null,
    language: 'fi',
    route: null,
    parent: {
      id: '6d54b2b6-b957-4133-a660-c9b030f4b1d0',
    },
  },
];
