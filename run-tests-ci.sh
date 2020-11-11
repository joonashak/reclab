#!/bin/bash

docker-compose -f docker-compose-ci.yml up -d db-ci cms-ci web-ci

#debug
docker-compose -f docker-compose.ci.yml logs -f web-ci

# Linting
docker-compose -f docker-compose-ci.yml exec -T cms-ci npm run lint || exit 1
docker-compose -f docker-compose-ci.yml exec -T web-ci npm run lint || exit 1

# CMS integration tests
docker-compose -f docker-compose-ci.yml exec -T cms-ci npm test || exit 1

# E2E
docker-compose -f docker-compose-ci.yml run e2e-ci || exit 1

# This is not strictly necessary in CI, but helps when debugging things locally, etc.
docker-compose -f docker-compose-ci.yml down
