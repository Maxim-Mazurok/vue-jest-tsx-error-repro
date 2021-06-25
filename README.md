# vue-jest-tsx-error-repro

This branch should fail:
```
yarn test
yarn run v1.22.10
$ vue-cli-service test:unit
ts-jest[versions] (WARN) Version 4.3.4 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
 FAIL  tests/unit/example.spec.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

    By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

    Here's what you can do:
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/en/configuration.html

    Details:

    /home/maxim/vue-jest-tsx-error-repro/node_modules/vuetify/lib/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,global,jest){export * from './components';
                                                                                             ^^^^^^

    SyntaxError: Unexpected token 'export'

      1 | import * as tsx from "vue-tsx-support";
    > 2 | import { VApp } from "vuetify/lib";
        | ^
      3 | import { VNode } from "vue";
      4 |
      5 | export default tsx.component({

      at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:537:17)
      at Object.<anonymous> (src/components/HelloWorld.tsx:2:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.724s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
