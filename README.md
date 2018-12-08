# ts-agh

A [TypeScript](https://www.typescriptlang.org) [Apollo GraphQL Hapi server](https://www.npmjs.com/package/apollo-server-hapi).

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Start the server: `npm start`
5. Open <http://localhost:4000/graphql>

## The Goodies

* `npm run build` builds the TypeScript files in _src_ into JavaScript files,
  output in _build_
* `npm run prettier` auto-formats source with [Prettier](https://prettier.io)
* `npm test` builds the project and runs the unit tests, written using
  [Ava](https://github.com/avajs/ava)
* The server uses [Hapi](https://hapijs.com), with logging wired up using
  [good](https://github.com/hapijs/good)
* [Husky](https://github.com/typicode/husky) installs commit hooks, including
  testing and [commitlint](https://marionebl.github.io/commitlint/#/)

## Docker

```shell
# Build an image
docker build -t swashcap/ts-agh .

# Run a container
docker run --rm -it -p 4000:4000 swashcap/ts-agh
```

