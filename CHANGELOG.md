# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

### Added

- Added synchronous and asynchronous versions, in PR [#24](https://github.com/compulim/on-error-resume-next/pull/24) and [#25](https://github.com/compulim/on-error-resume-next/pull/25)

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
