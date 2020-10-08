# reclab-cms

> **This is a sub-repository. Please see the main [README](../README.md).**

## Configuration

This app is configured for deployment to Heroku but will work on other platforms with respective tweaks.

### Environment Variables

Name | Description
-|-
`NODE_ENV` | Must be set to `production`.
`PORT` | Port to bind to.
`DATABASE_URL` | Fully-qualified Postgres connection string. (Developed with Postgres 12.)
`JWT_SECRET` | Secret used in creation of authentication tokens.
