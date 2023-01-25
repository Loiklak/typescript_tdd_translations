type TranslationShape = {
  [key: string]: string | TranslationShape;
};

type ValueOf<T> = T[keyof T];

export type TranslationKeysExtractor<Translations> =
  Translations extends TranslationShape ? Extractor<Translations> : never;

type Extractor<Translations> = keyof Translations;
