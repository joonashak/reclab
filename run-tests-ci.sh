#!/bin/bash

docker-compose -f docker-compose-ci.yml up -d db-ci cms-ci web-ci
docker-compose -f docker-compose-ci.yml run e2e-ci || exit 1
docker-compose -f docker-compose-ci.yml down
