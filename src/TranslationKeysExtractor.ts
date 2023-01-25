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

// prettier-ignore
type Extractor<Translations> = keyof {[
  Key in keyof Translations as (
    Translations[Key] extends TranslationShape
      ? Join<Key, Extractor<Translations[Key]>>
      : Key
  )
]: never;};
