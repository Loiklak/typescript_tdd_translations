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

  // What is never ?
  export type testNonObjectShouldReturnNever = Expect<Equals<never, output>>;
}

