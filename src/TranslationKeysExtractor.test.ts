import { Equals, Expect } from "./test-utils";
import { TranslationKeysExtractor } from "./TranslationKeysExtractor";

namespace test {
  const input = { foo: "bar" } as const;
  type output = TranslationKeysExtractor<typeof input>;

  type testSingleRootLevelKeyIsExtracted = Expect<Equals<"foo", output>>;
}

namespace test {
  const input = "foo" as const;
  type output = TranslationKeysExtractor<typeof input>;

  export type testNonObjectShouldReturnNever = Expect<Equals<never, output>>;
}

namespace test {
  const input = { foo: "bar", bar: "baz" } as const;
  type output = TranslationKeysExtractor<typeof input>;

  type testMultipleRootLevelKeysAreExtracted = Expect<
    Equals<"foo" | "bar", output>
  >;
}

namespace test {
  const input = { foo: { bar: "baz" } } as const;
  type output = TranslationKeysExtractor<typeof input>;

  type testSingleNestedKeyIsExtracted = Expect<Equals<"foo.bar", output>>;
}
