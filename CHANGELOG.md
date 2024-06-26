# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[2.0.1]: https://github.com/compulim/on-error-resume-next/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/compulim/on-error-resume-next/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/compulim/on-error-resume-next/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/compulim/on-error-resume-next/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/compulim/on-error-resume-next/releases/tag/v1.0.0
