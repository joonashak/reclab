/* eslint-disable import/prefer-default-export */
/**
 * List of options for a selection input, filtered to include only untranslated pages that are in
 * another language.
 * @param pages List of all pages.
 * @param language Currently selected language.
 * @param defaultId **Optional.** ID of a default page to always include in the options.
 */
export const getTranslationOptions = (pages, language, defaultId = null) => {
  const unTranslatedPages = pages.filter(
    (page) => page.language !== language && !page.translations.length,
  );

  const defaultPage = pages.filter((page) => page.id === defaultId);
  const translationOptionPages = defaultPage.concat(unTranslatedPages);

  const translationOptions = translationOptionPages
    .map((page) => ({ value: page.id, label: page.title, key: `translation-sel-${page.id}` }));

  return translationOptions;
};
