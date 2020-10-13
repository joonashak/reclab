#!/bin/bash

docker-compose -f docker-compose-ci.yml up -d db-ci cms-ci web-ci

# Linting
docker-compose -f docker-compose-ci.yml exec -T cms-ci npm run lint
docker-compose -f docker-compose-ci.yml exec -T web-ci npm run lint

# E2E
docker-compose -f docker-compose-ci.yml run e2e-ci || exit 1

# This is not strictly necessary in CI, but helps when debugging things locally, etc.
docker-compose -f docker-compose-ci.yml down
