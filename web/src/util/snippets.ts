/* eslint-disable import/prefer-default-export */

/**
 * Join language code and path.
 * @param language Language code.
 * @param path Path.
 */
export const makePath = (language: string, path: string) => `/${language}/${path.replace(/^\//, '')}`;
