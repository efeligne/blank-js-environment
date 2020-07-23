# blank-js-environment

## Setup

Via curl:

    sh -c "$(curl -fsSL https://raw.githubusercontent.com/efeligne/blank-js-environment/master/tools/install.sh)"

Via wget:

    sh -c "$(wget -O- https://raw.githubusercontent.com/efeligne/blank-js-environment/master/tools/install.sh)"
    
## Run scripts

Run locally, url [localhost:4200](http://localhost:4200):

    npm run start

Run tests using [Jest](https://github.com/facebook/jest):

    npm run test

Create developer build:

    npm run dev-build

Create production build:

    npm run build

## Dependencies
    
    @babel/polyfill
    lodash
    normalize.css

## Development dependencies
    
    @babel/core
    @babel/cli
    @babel/node
    @babel/preset-env
    babel-eslint
    babel-loader
    babel-jest
    clean-webpack-plugin
    copy-webpack-plugin
    cross-env
    css-loader
    csv-loader
    eslint
    eslint-config-airbnb-base
    eslint-import-resolver-webpack
    eslint-loader
    eslint-plugin-import
    eslint-plugin-jest
    file-loader
    html-webpack-plugin
    jest
    jest-cli
    less
    less-loader
    mini-css-extract-plugin
    node-sass
    optimize-css-assets-webpack-plugin
    sass-loader
    style-loader
    terser-webpack-plugin
    webpack
    webpack-bundle-analyzer
    webpack-cli
    webpack-dev-server
    xml-loader
