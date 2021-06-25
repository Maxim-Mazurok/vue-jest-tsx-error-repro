module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "^vuetify/lib(.*)": "vuetify/es5$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
