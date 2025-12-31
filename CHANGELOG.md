# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

| Icon | Description                                                    |
| ---- | -------------------------------------------------------------- |
| 👷🏻   | Related to development experience and non-production impacting |

## [Unreleased]

### Changed

- 👷🏻 Test framework moved from Jest to Node.js test runner, by [@compulim](https://github.com/compulim) in PR [#52](https://github.com/compulim/on-error-resume-next/pull/52)

## [2.0.3] - 2025-12-22

### Changed

- Bumped dependencies, in PR [#49](https://github.com/compulim/on-error-resume-next/pull/49)
  - Development dependencies
    - [`@babel/preset-env@7.28.5`](https://npmjs.com/package/@babel/preset-env/v/7.28.5)
    - [`@babel/preset-typescript@7.28.5`](https://npmjs.com/package/@babel/preset-typescript/v/7.28.5)
    - [`@jest/globals@30.2.0`](https://npmjs.com/package/@jest/globals/v/30.2.0)
    - [`@tsconfig/recommended@1.0.13`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.13)
    - [`@tsconfig/strictest@2.0.8`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.8)
    - [`@types/jest@30.0.0`](https://npmjs.com/package/@types/jest/v/30.0.0)
    - [`@types/node@25.0.3`](https://npmjs.com/package/@types/node/v/25.0.3)
    - [`@types/react@19.2.7`](https://npmjs.com/package/@types/react/v/19.2.7)
    - [`@types/react-dom@19.2.3`](https://npmjs.com/package/@types/react-dom/v/19.2.3)
    - [`@typescript-eslint/eslint-plugin@8.50.0`](https://npmjs.com/package/@typescript-eslint/eslint-plugin/v/8.50.0)
    - [`@typescript-eslint/parser@8.50.0`](https://npmjs.com/package/@typescript-eslint/parser/v/8.50.0)
    - [`esbuild@0.27.2`](https://npmjs.com/package/esbuild/v/0.27.2)
    - [`eslint@9.39.2`](https://npmjs.com/package/eslint/v/9.39.2)
    - [`eslint-import-resolver-typescript@4.4.4`](https://npmjs.com/package/eslint-import-resolver-typescript/v/4.4.4)
    - [`eslint-plugin-import@2.32.0`](https://npmjs.com/package/eslint-plugin-import/v/2.32.0)
    - [`eslint-plugin-prettier@5.5.4`](https://npmjs.com/package/eslint-plugin-prettier/v/5.5.4)
    - [`eslint-plugin-react@7.37.5`](https://npmjs.com/package/eslint-plugin-react/v/7.37.5)
    - [`expect@30.2.0`](https://npmjs.com/package/expect/v/30.2.0)
    - [`jest@30.2.0`](https://npmjs.com/package/jest/v/30.2.0)
    - [`mocha@11.7.5`](https://npmjs.com/package/mocha/v/11.7.5)
    - [`prettier@3.7.4`](https://npmjs.com/package/prettier/v/3.7.4)
    - [`publint@0.3.16`](https://npmjs.com/package/publint/v/0.3.16)
    - [`react@19.2.3`](https://npmjs.com/package/react/v/19.2.3)
    - [`react-dom@19.2.3`](https://npmjs.com/package/react-dom/v/19.2.3)
    - [`sinon@21.0.1`](https://npmjs.com/package/sinon/v/21.0.1)
    - [`tsup@8.5.1`](https://npmjs.com/package/tsup/v/8.5.1)
    - [`typescript@5.9.3`](https://npmjs.com/package/typescript/v/5.9.3)

## [2.0.2] - 2025-01-21

### Changed

- Integration tests ported to mocha for better test conclusiveness, in PR [#34](https://github.com/compulim/on-error-resume-next/pull/34) and [#35](https://github.com/compulim/on-error-resume-next/pull/35)
- Bumped dependencies, in PR [#36](https://github.com/compulim/on-error-resume-next/pull/36)
   - Development dependencies
      - [`@babel/preset-env@7.24.7`](https://npmjs.com/package/@babel/preset-env/v/7.24.7)
      - [`@babel/preset-typescript@7.24.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.7)
      - [`@types/node@20.14.9`](https://npmjs.com/package/@types/node/v/20.14.9)
      - [`esbuild@0.21.5`](https://npmjs.com/package/esbuild/v/0.21.5)
      - [`prettier@3.3.2`](https://npmjs.com/package/prettier/v/3.3.2)
      - [`tsup@8.1.0`](https://npmjs.com/package/tsup/v/8.1.0)
      - [`typescript@5.5.2`](https://npmjs.com/package/typescript/v/5.5.2)
- Added [ESLint import/export syntax](https://npmjs.com/package/eslint-plugin-import), in PR [#37](https://github.com/compulim/on-error-resume-next/pull/37)
- Added [`publint`](https://npmjs.com/package/publint), in PR [#37](https://github.com/compulim/on-error-resume-next/pull/37)
- Bumped dependencies, in PR [#39](https://github.com/compulim/on-error-resume-next/pull/39)
  - Development dependencies
    - [`@babel/preset-env@7.25.8`](https://npmjs.com/package/@babel/preset-env/v/7.25.8)
    - [`@babel/preset-typescript@7.25.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.25.7)
    - [`@tsconfig/recommended@1.0.7`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.7)
    - [`@types/jest@29.5.13`](https://npmjs.com/package/@types/jest/v/29.5.13)
    - [`@types/node@22.7.5`](https://npmjs.com/package/@types/node/v/22.7.5)
    - [`@types/react@18.3.11`](https://npmjs.com/package/@types/react/v/18.3.11)
    - [`@types/react-dom@18.3.1`](https://npmjs.com/package/@types/react-dom/v/18.3.1)
    - [`@typescript-eslint/eslint-plugin@8.8.1`](https://npmjs.com/package/@typescript-eslint/eslint-plugin/v/8.8.1)
    - [`@typescript-eslint/parser@8.8.1`](https://npmjs.com/package/@typescript-eslint/parser/v/8.8.1)
    - [`esbuild@0.24.0`](https://npmjs.com/package/esbuild/v/0.24.0)
    - [`eslint@9.12.0`](https://npmjs.com/package/eslint/v/9.12.0)
    - [`eslint-plugin-prettier@5.2.1`](https://npmjs.com/package/eslint-plugin-prettier/v/5.2.1)
    - [`eslint-plugin-react@7.37.1`](https://npmjs.com/package/eslint-plugin-react/v/7.37.1)
    - [`mocha@10.7.3`](https://npmjs.com/package/mocha/v/10.7.3)
    - [`prettier@3.3.3`](https://npmjs.com/package/prettier/v/3.3.3)
    - [`sinon@19.0.2`](https://npmjs.com/package/sinon/v/19.0.2)
    - [`tsup@8.3.0`](https://npmjs.com/package/tsup/v/8.3.0)
    - [`typescript@5.6.3`](https://npmjs.com/package/typescript/v/5.6.3)

## [2.0.1] - 2024-06-01

### Fixed

- Fixed [#30](https://github.com/compulim/on-error-resume-next/issues/30). When bundling for browser, should not fail with `isPromise` being imported from Node.js, in PR [#31](https://github.com/compulim/on-error-resume-next/pull/31).

## [2.0.0] - 2024-06-01

### Added

- Added synchronous and asynchronous versions, in PR [#24](https://github.com/compulim/on-error-resume-next/pull/24) and [#25](https://github.com/compulim/on-error-resume-next/pull/25)

### Deprecated

- Introduced named exports and removed default imports
- Synchronous and asynchronous are now separated into different exports
   - Use `import { onErrorResumeNext } from 'on-error-resume-next'` for synchronous functions
   - Use `import { onErrorResumeNext } from 'on-error-resume-next/async'` for asynchronous functions, will always return `Promise` regardless the resolution and rejection is handled synchronously or asynchronously
   - Use `import { onErrorResumeNext } from 'on-error-resume-next/auto'` to auto-detect (legacy behavior), will return on `return`/`throw`, and resolve on `resolve`/`reject`

  If you are using v1, you will need to port your code as follow:

  ```diff
- import onErrorResumeNext from 'on-error-resume-next';
  + import { onErrorResumeNext } from 'on-error-resume-next/auto';
  ```

## [1.2.0] - 2020-05-26

### Changed

- Bump dependencies, in PR [#8](https://github.com/compulim/on-error-resume-next/pull/8)
   - [`@babel/cli@7.8.4`](https://npmjs.com/package/@babel/cli)
   - [`@babel/core@7.9.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/plugin-proposal-object-rest-spread@7.9.6`](https://npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
   - [`@babel/preset-env@7.9.6`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-core@^7.0.0-bridge.0`](https://npmjs.com/package/babel-core)
   - [`babel-jest@26.0.1`](https://npmjs.com/package/babel-jest)
   - [`babel-plugin-add-module-exports@1.0.2`](https://npmjs.com/package/babel-plugin-add-module-exports)
   - [`jest@26.0.1`](https://npmjs.com/package/jest)
   - [`regenerator-runtime@0.13.5`](https://npmjs.com/package/regenerator-runtime)
- Bump dependencies, in PR [#4](https://github.com/compulim/on-error-resume-next/pull/4)
   - [@babel/cli@^7.5.5](https://www.npmjs.com/package/@babel/cli)
   - [@babel/core@^7.5.5](https://www.npmjs.com/package/@babel/core)
   - [@babel/plugin-proposal-object-rest-spread@^7.5.5](https://www.npmjs.com/package/@babel/plugin-proposal-object-rest-spread)
   - [@babel/preset-env@^7.5.5](https://www.npmjs.com/package/@babel/preset-env)
   - [babel-jest@^24.8.0](https://www.npmjs.com/package/babel-jest)
   - [babel-plugin-add-module-exports@^1.0.2](https://www.npmjs.com/package/babel-plugin-add-module-exports)
   - [jest@^24.8.0](https://www.npmjs.com/package/jest)
   - [regenerator-runtime@^0.13.2](https://www.npmjs.com/package/regenerator-runtime)

## [1.1.0] - 2018-10-08

### Added

- Default exports for CommonJS

### Changed

- Moved to Babel 7

## [1.0.0] - 2018-03-21

### Added

- Initial commit

[Unreleased]: https://github.com/compulim/on-error-resume-next/compare/v2.0.3...HEAD
[2.0.3]: https://github.com/compulim/on-error-resume-next/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/compulim/on-error-resume-next/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/compulim/on-error-resume-next/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/compulim/on-error-resume-next/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/compulim/on-error-resume-next/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/compulim/on-error-resume-next/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/compulim/on-error-resume-next/releases/tag/v1.0.0
