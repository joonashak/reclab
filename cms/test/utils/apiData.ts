/**
 * API models created from seeding data.
 */
import { pick } from 'lodash';
import menuItemsSeed from '../../src/seeder/data/menuItems.seed';
import pagesSeed from '../../src/seeder/data/pages.seed';
import settingsSeed from '../../src/seeder/data/settings.seed';

export const apiPages = pagesSeed.map(page => {
  const { author, editor, translations, ...rest } = page;
  const cleanTranslations = translations.map(({ language, path, ...rest }) => ({
    language,
    path,
  }));
  return { ...rest, translations: cleanTranslations };
});

export const apiMenu = menuItemsSeed.map(item =>
  pick(item, [
    'id',
    'title',
    'order',
    'language',
    'path',
    'page.id',
    'page.title',
    'page.language',
    'page.path',
    'parent.id',
  ]),
);

export const apiSettings = (() => {
  const { frontpage, ...rest } = settingsSeed;
  return { ...rest, frontpage: { path: frontpage.path } };
})();
