# vue-jest-tsx-error-repro

This branch should fail:
```
yarn test
yarn run v1.22.10
$ vue-cli-service test:unit
ts-jest[versions] (WARN) Version 4.3.4 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
 FAIL  tests/unit/example.spec.ts
  HelloWorld
    ✕ renders props.msg when passed (13ms)

  ● HelloWorld › renders props.msg when passed

    TypeError: Cannot call a class as a function

      12 |   },
      13 |   render(): VNode {
    > 14 |     return (
         |     ^
      15 |       <VThemeProvider>
      16 |         <h1>{this.msg}</h1>
      17 |       </VThemeProvider>

      at _classCallCheck (node_modules/vuetify/es5/framework.js:14:99)
      at Proxy.render (src/components/HelloWorld.tsx:14:5)
      at Object.<anonymous> (tests/unit/example.spec.ts:7:21)

  console.error node_modules/vue/dist/vue.runtime.common.dev.js:621
    [Vue warn]: Error in render: "TypeError: Cannot call a class as a function"
    
    found in
    
    ---> <HelloWorld>
           <Root>

  console.error node_modules/vue/dist/vue.runtime.common.dev.js:1893
    TypeError: Cannot call a class as a function
        at _classCallCheck (/home/maxim/vue-jest-tsx-error-repro/node_modules/vuetify/es5/framework.js:14:99)
        at Vuetify (/home/maxim/vue-jest-tsx-error-repro/node_modules/vuetify/src/framework.ts:38:50)
        at resolveAsyncComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3697:15)
        at createComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3213:12)
        at _createElement (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3448:13)
        at createElement (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3368:10)
        at vm.$createElement (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3508:54)
        at createElement (/home/maxim/vue-jest-tsx-error-repro/node_modules/@vue/test-utils/dist/vue-test-utils.js:2543:36)
        at Proxy.render (/home/maxim/vue-jest-tsx-error-repro/src/components/HelloWorld.tsx:14:5)
        at VueComponent.Vue._render (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3559:22)
        at VueComponent.updateComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4069:21)
        at Watcher.get (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4481:25)
        at new Watcher (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4470:12)
        at mountComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4076:3)
        at VueComponent.Object.<anonymous>.Vue.$mount (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:8436:10)
        at init (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3131:13)
        at createComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:6002:9)
        at createElm (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:5949:9)
        at VueComponent.patch [as __patch__] (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:6499:7)
        at VueComponent.Vue._update (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:3948:19)
        at VueComponent.updateComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4069:10)
        at Watcher.get (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4481:25)
        at new Watcher (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4470:12)
        at mountComponent (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:4076:3)
        at VueComponent.Object.<anonymous>.Vue.$mount (/home/maxim/vue-jest-tsx-error-repro/node_modules/vue/dist/vue.runtime.common.dev.js:8436:10)
        at mount (/home/maxim/vue-jest-tsx-error-repro/node_modules/@vue/test-utils/dist/vue-test-utils.js:14066:21)
        at shallowMount (/home/maxim/vue-jest-tsx-error-repro/node_modules/@vue/test-utils/dist/vue-test-utils.js:14092:10)
        at Object.<anonymous> (/home/maxim/vue-jest-tsx-error-repro/tests/unit/example.spec.ts:7:21)
        at Object.asyncJestTest (/home/maxim/vue-jest-tsx-error-repro/node_modules/jest-jasmine2/build/jasmineAsyncInstall.js:102:37)
        at /home/maxim/vue-jest-tsx-error-repro/node_modules/jest-jasmine2/build/queueRunner.js:43:12
        at new Promise (<anonymous>)
        at mapper (/home/maxim/vue-jest-tsx-error-repro/node_modules/jest-jasmine2/build/queueRunner.js:26:19)
        at /home/maxim/vue-jest-tsx-error-repro/node_modules/jest-jasmine2/build/queueRunner.js:73:41

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.031s, estimated 2s
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
