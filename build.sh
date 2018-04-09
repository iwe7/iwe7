#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
$(npm bin)/ng-packagr -p ./libs/package.json
$(npm bin)/ng-packagr -p ./libs/lazy-load/package.json

