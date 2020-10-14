# Recover Laboratory Web

## Installation

As some commands, such as development mode tests, are run on the host machine instead of a container, you will need to install the dependecies first.

### Install Dependencies

```bash
npm run init
```

## Development Environment

The development environment is configured with npm and Docker. You will need to have the `npm` and `docker` commands available on your system (tested only on macOS).

> _**Note:**_ Gatsby's hot-reload does not currently work properly when running in a Docker container. In average, it fails on every other change.

All commands below should be run in project root. The npm scripts in subdirectories are meant for internal use by the scripts in root.

### Start Development Environment

```bash
npm start
```

This command brings up the containers in the background. The services are accessible at

- [http://localhost:3000](http://localhost:3000/) (frontend),
- [http://localhost:3001](http://localhost:3001/) (backend), and,
- [http://localhost:8080](http://localhost:8080/) (Adminer).

### Stop Development Environment

```bash
npm stop
```

### Restart Development Environment

```bash
npm run restart
```

Note that changes are hot-realoaded only from the `/cms/src` and `/web/src` directories. If you make changes outside of these locations, you will need to restart the containers.

### View Logging Output

View all logs:

```bash
npm run logs
```

View logs by service (frontend/backend/database, respectively):

```bash
npm run logs:<cms|web|db>
```

## Testing

In CI, all tests are run in containers. While this can be achieved locally with the `npm run test:ci` command, the development environment is designed to allow for running test unintrusively while coding.

Make sure the development environment is running before using the commands below.

### Run All Tests

```bash
npm test
```

### Run Only CMS Integration Tests

```bash
npm run test:cms
```

### Check Linting

```bash
npm run test:lint
```

### Open Cypress

For use when writing tests.

```bash
npm run test:open
```

## Deployment Pipeline

The pipeline is set up for trunk-based development with pull requests and releases used as deployment triggers.

1. Push changes to `trunk` branch. Github runs tests for the new `HEAD`.
2. Create a pull request to merge changes from `trunk` to `main`. The merge can be completed once all tests have passed. This triggers deployment to staging.
3. Publish a new release to deploy to production. A Docker image is also created and published [here](https://hub.docker.com/repository/docker/joonashak/reclab-cms) for use in integration tests, etc.

## License

See [LICENSE](./LICENSE).
