#!/bin/bash

echo "--- node module tests ---"

#npm test
mocha -R spec test
SERVER=$?

echo "--- client module tests ---"

mocha-phantomjs client/test/runner.html
CLIENT=$?

if ( [ "$SERVER" = 0 ] && [[ "$CLIENT" = 0 ]] ); then
  exit 0
else
  exit 1
fi
