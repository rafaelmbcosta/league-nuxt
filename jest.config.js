module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: '@vue/cli-plugin-unit-jest/presets/no-babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!vuetify)'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,vue}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  coverageReporters: [
    'lcov',
    'html'
  ]
}
