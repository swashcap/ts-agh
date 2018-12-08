import Hapi from "hapi";
import good from "good";
import { ApolloServer } from "apollo-server-hapi";

import resolvers from "./resolvers";
import typeDefs from "./type-definitions";

const port = process.env.PORT || 4000;

const getServer = () => {
  const app = new Hapi.Server({
    port
  });

  const server = new ApolloServer({
    resolvers,
    typeDefs
  });

  return server
    .applyMiddleware({ app })
    .then(() => server.installSubscriptionHandlers(app.listener))
    .then(() => {
      if (process.env.NODE_ENV !== "test") {
        return app.register({
          options: {
            reporters: {
              myConsoleReporter: [
                {
                  module: "good-squeeze",
                  name: "Squeeze",
                  args: [{ log: "*", response: "*" }]
                },
                {
                  module: "good-console"
                },
                "stdout"
              ]
            }
          },
          plugin: good
        });
      }
    })
    .then(() => ({ app, server }));
};

if (!module.parent) {
  getServer()
    .then(({ app }) => Promise.all([app, app.start()]))
    .then(([app]) => {
      console.log(`Server started at ${app.info.uri}`);
    })
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}

export default getServer;
