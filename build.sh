#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
# $(npm bin)/ng-packagr -p ./libs/package.json
# $(npm bin)/ng-packagr -p ./libs/lazy-load/package.json
# $(npm bin)/ng-packagr -p ./libs/icss/package.json
# $(npm bin)/ng-packagr -p ./libs/core/package.json
# $(npm bin)/ng-packagr -p ./libs/design/package.json
# $(npm bin)/ng-packagr -p ./libs/themes/package.json
# $(npm bin)/ng-packagr -p ./libs/colors/package.json

$(npm bin)/ng-packagr -p ./libs/shared/ng-package.json

$(npm bin)/ng-packagr -p ./libs/antd/ng-package.json
