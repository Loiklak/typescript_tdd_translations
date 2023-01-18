type TranslationShape = {
  [key: string]: string | TranslationShape;
};

export type TranslationKeysExtractor<Translations> =
  Translations extends TranslationShape ? Extractor<Translations> : never;

type Extractor<Translations> = keyof Translations;
