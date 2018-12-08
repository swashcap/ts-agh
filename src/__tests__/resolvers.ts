import test from "ava";

import resolvers from "../resolvers";

test("hello query", t => {
  t.is(resolvers.Query.hello(), "Hello, world!");
});
