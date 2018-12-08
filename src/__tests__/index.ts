import test from "ava";

import getServer from "../index";

test("server", async t => {
  const { app } = await getServer();
  const response = await app.inject({
    method: "POST",
    url: "/graphql",
    payload: JSON.stringify({
      query: "{ hello }"
    })
  });

  t.deepEqual(
    JSON.parse(response.payload),
    {
      data: {
        hello: "Hello, world!"
      }
    },
    "responds to hello query"
  );
});
