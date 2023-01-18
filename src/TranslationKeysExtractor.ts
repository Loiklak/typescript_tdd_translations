type TranslationShape = {
  [key: string]: string | TranslationShape;
};

export type TranslationKeysExtractor<Translations> = "foo" 
