# vue-jest-tsx-error-repro

This branch should fail:
```
yarn test
yarn run v1.22.10
$ vue-cli-service test:unit
ts-jest[versions] (WARN) Version 4.3.4 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
 FAIL  tests/unit/example.spec.ts
  HelloWorld
    ✕ renders props.msg when passed (8ms)

  ● HelloWorld › renders props.msg when passed

    expect(received).toMatch(expected)

    Expected substring: "new message"
    Received string:    ""

       8 |       propsData: { msg },
       9 |     });
    > 10 |     expect(wrapper.text()).toMatch(msg);
         |                            ^
      11 |   });
      12 | });
      13 |

      at Object.<anonymous> (tests/unit/example.spec.ts:10:28)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.019s, estimated 2s
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
