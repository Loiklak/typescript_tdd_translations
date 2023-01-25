type TranslationShape = {
  [key: string]: string | TranslationShape;
};

type ValueOf<T> = T[keyof T];

type Join<T, U> = T extends string
  ? U extends string
    ? `${T}.${U}`
    : never
  : never;

export type TranslationKeysExtractor<Translations> =
  Translations extends TranslationShape ? Extractor<Translations> : never;

type Extractor<Translations> = ValueOf<Translations> extends string
  ? keyof Translations
  : Join<keyof Translations, TranslationKeysExtractor<ValueOf<Translations>>>;
