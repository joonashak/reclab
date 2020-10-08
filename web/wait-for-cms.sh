#!/bin/bash

set -e
  
host="$1"
shift
cmd="$@"
  
until curl -f http://$host:3001/page -c '\q'; do
  >&2 echo "CMS is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "CMS is up - executing command"
exec $cmd
