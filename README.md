# reclab-cms

Recover Laboratory CMS

## Docs

[Database](./docs/Database.md)

## Configuration

### Development Environment

The development environment is configured through Docker. You must have `docker` and `docker-compose` commands available to use the development environment and run the tests.

You might also want to install Nest CLI for development.

### Production Environment

This app is configured for deployment to Heroku but will work on other platforms with respective tweaks.

#### Environment Variables

Name | Description
-|-
`NODE_ENV` | Must be set to `production`.
`PORT` | Port to bind to.
`DATABASE_URL` | Fully-qualified Postgres connection string. (Developed with Postgres 12.)
`JWT_SECRET` | Secret used in creation of authentication tokens.

## Usage

### Development

Start development environment (requires Docker):

```bash
npm start
```

The CMS server will listen at port 3001 and Adminer at 8080. Changes in the `src/` folder are synced to the container and hot-loaded by Nest.

### Production

Build and start in production mode:

```bash
npm run build
npm run start:prod
```

### E2E Tests

Run all tests:

```bash
npm test
```

### Linting

Check linting (with auto-fix):

```bash
npm run lint
npm run lint:fix
```

## Deployment Pipeline

The pipeline is set up for trunk-based development with pull requests and releases used as deployment triggers.

1. Push changes to `trunk` branch. Github runs tests for the new `HEAD`.
2. Create a pull request to merge changes from `trunk` to `main`. The merge can be completed once all tests have passed. This triggers deployment to staging.
3. Publish a new release to deploy to production. A Docker image is also created and published [here](https://hub.docker.com/repository/docker/joonashak/reclab-cms) for use in integration tests, etc.

## License

See [LICENSE](./LICENSE).
