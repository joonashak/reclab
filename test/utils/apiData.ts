/**
 * API models created from seeding data.
 */
import pagesSeed from '../../src/seeder/data/pages.seed';

export const apiPages = pagesSeed.map(page => {
  const { author, editor, translations, ...rest } = page;
  const cleanTranslations = translations.map(({ language, path, ...rest }) => ({
    language,
    path,
  }));
  return { ...rest, translations: cleanTranslations };
});
