import test from "ava";
import { buildSchema, validateSchema } from "graphql";
import { buildSchemaFromTypeDefinitions } from "graphql-tools";

import typeDefs, { schema } from "../type-definitions";

test("type defs", t => {
  t.deepEqual(validateSchema(buildSchema(schema)), [], "valid schema");
  t.notThrows(() => buildSchemaFromTypeDefinitions(typeDefs), "valid typeDefs");
});
