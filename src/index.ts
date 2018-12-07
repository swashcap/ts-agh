import Hapi from "hapi";
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
    .then(() => ({ app, server }));
};

if (!module.parent) {
  getServer()
    .then(({ app }) => app.start())
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
}

export default getServer;
