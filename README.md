# vue-jest-tsx-error-repro

This branch should not fail:
```
yarn test:unit
yarn run v1.22.10
$ vue-cli-service test:unit
ts-jest[versions] (WARN) Version 4.1.5 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
 PASS  tests/unit/example.spec.ts
  HelloWorld
    ✓ renders props.msg when passed (8ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.948s
Ran all test suites.
Done in 4.52s.
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
