### Getting started

- Create a [Logto](https://logto.io/) account for authentication and authorization (RBAC)
- Create a [Convex](https://www.convex.dev/) account for real time database
- Create a new project in Logto
- Create a new project in Convex
- Retrieve the _Authorization Endpoint_ and _App ID_ from Logto
- In the Convex project naviation to the Project _Settings_ and then _Environment Variables_
- Add a new environment variable called `CONVEX_AUTH_DOMAIN` and use the Logto _Authorization Endpoint_ as the value
- Add another new environment variable called `CONVEX_AUTH_APPLICATION_ID` and use the Logo _App ID_
- Run `npx convex dev` from the `app/website` directory to wire up the Convex project

### Known issues

- Waiting for [#7913](https://github.com/remix-run/remix/pull/7913) to be released which will enable Remix to work within [Turborepo](https://turbo.build/repo) with the new [Vite plugin](https://remix.run/blog/remix-heart-vite).

### Utilities

This repo has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
