module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ["/node_modules/(?!vuetify)"],
  collectCoverage: true,
  coverageReporters: [
    "lcov",
    "html"
  ],
}
