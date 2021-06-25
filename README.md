# vue-jest-tsx-error-repro

This branch should fail:
```
yarn test
yarn run v1.22.10
$ vue-cli-service test:unit
ts-jest[versions] (WARN) Version 4.3.4 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
 FAIL  tests/unit/example.spec.tsx
  ✕ renders app name (27ms)

  ● renders app name

    expect(received).not.toThrow()

    Error name:    "TestingLibraryElementError"
    Error message: "Unable to find an element with the text: new message. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.·
    <body>
      <div>
        <!---->
      </div>
    </body>"

          16 |   );
          17 |
        > 18 |   expect(() => getByText(msg)).not.toThrow();
             |                ^
          19 | });
          20 |

          at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:37:19)
          at tests/unit/example.spec.tsx:18:16
          at Object.<anonymous> (tests/unit/example.spec.tsx:18:36)

      16 |   );
      17 |
    > 18 |   expect(() => getByText(msg)).not.toThrow();
         |                                    ^
      19 | });
      20 |

      at Object.<anonymous> (tests/unit/example.spec.tsx:18:36)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.426s
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
