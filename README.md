# reclab-web

This app implements the Recover Laboratory website frontend.

## Deployment Strategy

Gatsby is used to populate the site with CMS data at build time. To achieve convenient re-deployments upon content changes, a webhook must be set-up for the CMS backend to be able to trigger re-deployment. The project is configured for Vercel static site hosting.

1. Push changes to the `trunk` branch. Github runs tests for the new `HEAD`.
2. Create a pull request to merge changes from `trunk` to `main`. The merge can be completed once all tests have passed. This triggers deployment to staging using the staging CMS, as well.
3. Publish a new release to deploy to production.

## CMS Backend

To develop and build this project, [reclab-cms](https://github.com/joonashak/reclab-cms) is required. For development, you should run the CMS on your local system. Clone the repository and follow the instructions therein.

## Environment Variables

Name | Description
-|-
`CMS_URL` | URL for accessing the CMS both at build and run time.

## Usage

### Development

Launch the development environment *(make sure you have the CMS up first)*:

```bash
npm start
```

### Linting

Check linting (with auto-fix):

```bash
npm run lint
npm run lint:fix
```
