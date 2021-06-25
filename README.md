# vue-jest-tsx-error-repro

This branch should fail:
```
yarn test
yarn run v1.22.10
$ vue-cli-service test:unit
ts-jest[versions] (WARN) Version 4.3.4 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
 FAIL  tests/unit/example.spec.ts
  ● Test suite failed to run

    TypeScript diagnostics (customize using `[jest-config].globals.ts-jest.diagnostics` option):
    src/components/HelloWorld.tsx:2:22 - error TS7016: Could not find a declaration file for module 'vuetify/es5'. '/home/maxim/vue-jest-tsx-error-repro/node_modules/vuetify/es5/index.js' implicitly has an 'any' type.
      Try `npm i --save-dev @types/vuetify` if it exists or add a new declaration (.d.ts) file containing `declare module 'vuetify/es5';`

    2 import { VApp } from "vuetify/es5";
                           ~~~~~~~~~~~~~

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.4s
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
