type TranslationShape = {
  [key: string]: string | TranslationShape;
};

export type TranslationKeysExtractor<Translations> = Translations extends TranslationShape ? "foo" : never
