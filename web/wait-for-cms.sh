#!/bin/bash

set -e
  
addr="$1"
shift
cmd="$@"
  
until curl -f $addr -c '\q'; do
  >&2 echo "CMS is unavailable - sleeping"
  sleep 1
done
  
>&2 echo "CMS is up - executing command"
exec $cmd
