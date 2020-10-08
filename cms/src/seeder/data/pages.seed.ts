import usersSeed from './users.seed';

const justPages = [
  {
    id: 'b69ed738-5e02-47f4-8180-a1dd4611b7f7',
    title: 'Test Page 1',
    content: 'Lorem ipsum...',
    createdAt: '2020-09-12T17:31:46.550Z',
    updatedAt: '2020-09-13T17:31:46.550Z',
    language: 'en',
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/page1',
  },
  {
    id: '350feb92-7be8-4df3-812e-cc8a491c1344',
    title: 'Test Page 2',
    content: '...dolor sit amet',
    createdAt: '2020-09-13T17:31:46.550Z',
    updatedAt: '2020-09-14T19:32:46.550Z',
    language: 'en',
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/page2',
  },
  {
    id: 'f3c9259c-fd0c-420c-b80e-a68ad7b97bfa',
    title: 'Testisivu 1',
    content: 'Lorem ipsum...',
    createdAt: '2020-09-12T17:31:46.550Z',
    updatedAt: '2020-09-13T17:31:46.550Z',
    language: 'fi',
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/sivu1',
  },
  {
    id: 'a4414d39-73f9-481f-880f-ae98e5ef1638',
    title: 'Testisivu 2',
    content: '...dolor sit amet',
    createdAt: '2020-09-13T17:31:46.550Z',
    updatedAt: '2020-09-14T19:32:46.550Z',
    language: 'fi',
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/sivu2',
  },
  {
    id: 'e762e04d-70f5-49fb-aac4-c816e9d0a78f',
    title: 'Page with no relation',
    content: '...dolor sit amet',
    createdAt: '2020-09-13T17:31:46.550Z',
    updatedAt: '2020-09-14T19:32:46.550Z',
    language: 'en',
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/no-relation',
  },
  {
    id: 'd13cf0a8-44db-49c5-9309-f34ecbc8e5d7',
    title: 'Private page',
    content: '...dolor sit amet',
    createdAt: '2020-09-13T17:31:46.550Z',
    updatedAt: '2020-09-14T19:32:46.550Z',
    language: 'en',
    isPublic: false,
    author: usersSeed[0],
    editor: null,
    path: '/private',
  },
];

const relationMap = [
  {
    a: 'b69ed738-5e02-47f4-8180-a1dd4611b7f7',
    b: 'f3c9259c-fd0c-420c-b80e-a68ad7b97bfa',
  },
  {
    a: '350feb92-7be8-4df3-812e-cc8a491c1344',
    b: 'a4414d39-73f9-481f-880f-ae98e5ef1638',
  },
];

// Add relations both ways.
const pagesWithRelations = justPages.map(page => {
  const relation = relationMap.find(r => r.a === page.id || r.b === page.id);
  // At least an empty array needs to be added, otherwise typescript complains about missing field when mangling test data.
  let translations = [];

  if (relation) {
    const relationId = relation.a === page.id ? relation.b : relation.a;
    translations = [justPages.find(p => p.id === relationId)];
  }

  return { ...page, translations };
});

export default pagesWithRelations;
