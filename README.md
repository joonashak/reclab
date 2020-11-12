# Recover Laboratory Web

## Installation

As some commands, such as development mode tests, are run on the host machine instead of a container, you will need to install the dependecies first.

### Install Dependencies

```bash
npm run init
```

## Configuration

Images used in CMS-stored content are stored in Cloudinary. Currently this is not mocked for development or tests. The development environment can be used without configuring Cloudinary credentials but this means that images in the content will not be displayed.

To configure Cloudinary for use in development mode, use the following `.env` file in project root:

```bash
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Images are currently not tested in the end-to-end tests.

## Development Environment

The development environment is configured with npm and Docker. You will need to have the `npm` and `docker` commands available on your system (tested only on macOS).

> _**Note on updating content:**_ Upon making changes it is currently necessary to restart the frontend container to have Gatsby rebuild with new static content. Use `npm run restart` for this.

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

## Maintenance

### Build All Containers

```bash
npm run build
```

### Build Specific Container

Use this, for example, when you update CMS content or dependencies (frontend/backend, respectively):

```bash
npm run build:<cms|web>
```

### Convenience Commands for Rebuilding

Use this convenience command to stop, rebuild and start again all of specific containers.

```bash
npm run rebuild[:<cms|web>]
```

### Generate Migrations

Migrations are generated automatically by TypeORM and saved at `cms/migrations` with the suffix `<NAME>`. The development environment synchronizes the database schema with the code automatically to help development.

```bash
npm run migrations:generate -- <NAME>
```

## Deployment Pipeline

The pipeline is set up for trunk-based development with pull requests and releases used as deployment triggers.

1. Push changes to `trunk` branch. Github runs tests for the new `HEAD`.
2. Create a pull request to merge changes from `trunk` to `main`. The merge can be completed once all tests have passed. This triggers deployment to staging.
3. Publish a new release to deploy to production.

## Propagating Content Changes to Static Frontend

Gatsby is used to populate the site with CMS data at build time. To achieve convenient re-deployments upon content changes, a webhook must be set-up for the CMS backend to be able to trigger re-deployment. The project is configured for Vercel static site hosting.

## License

See [LICENSE](./LICENSE).
