#!/bin/bash

docker-compose -f docker-compose-ci.yml up -d db-ci cms-ci web-ci
docker-compose -f docker-compose-ci.yml up --exit-code-from e2e-ci e2e-ci
docker-compose -f docker-compose-ci.yml down
