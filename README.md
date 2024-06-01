# on-error-resume-next

Run a function, synchronously or asynchronously, and ignore errors.

[![npm version](https://badge.fury.io/js/on-error-resume-next.svg)](https://npmjs.com/package/on-error-resume-next)

The name come from [Visual Basic](https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/statements/on-error-statement). The original `On Error Resume Next` statement is considered a bad error handling practice.

Although the perception of the feature is negative, when scoped and used responsibly, it can become a very helpful utility function.

When using `onErrorResumeNext`, please be responsible and fully understand the impact of ignoring errors.

# Breaking changes

## New in 2.0

We introduced named exports and removed default imports. The default is synchronous. The "auto-detection" version is being moved to under 'on-error-resume-next/auto'.

```diff
- import onErrorResumeNext from 'on-error-resume-next';
+ import { onErrorResumeNext } from 'on-error-resume-next/auto';
```

It is recommended to use either synchronous or asynchronous version for better clarity.

# Usage

`onErrorResumeNext` will return the result if it is a success. For example,

```js
import { onErrorResumeNext } from 'on-error-resume-next';

// Will return result on returns.
const returned = onErrorResumeNext(() => JSON.parse('{"hello":"World!"}'));

expect(returned).toEqual({ hello: 'World!' });

// Will return undefined on throws.
const thrown = onErrorResumeNext(() => JSON.parse('<xml />'));

expect(thrown).toBeUndefined();
```

Notes: if an asynchronous function is being passed to `onErrorResumeNext()`, it will throw to protect from false negatives. Please use `on-error-resume-next/async` for asynchronous functions.

## Asynchronous using `async`/`await`

`onErrorResumeNext` will capture both exceptions (synchronous) and rejections (asynchronous). The returned value is always a `Promise` object.

```js
import { onErrorResumeNext } from 'on-error-resume-next/async';

// "async" will return Promise on resolves.
const resolution = onErrorResumeNext(() => Promise.resolve('Hello, World!'));

await expect(resolution).resolves.toBe('Hello, World!');

// "async" will return Promise on returns.
const returned = onErrorResumeNext(() => 'Hello, World!');

await expect(returned).resolves.toBe('Hello, World!');

// "async" will return Promise on rejects.
const rejection = onErrorResumeNext(() => Promise.reject(new Error()));

await expect(rejection).resolves.toBeUndefined();

// "async" will return Promise on throws.
const thrown = onErrorResumeNext(() => {
  throw new Error();
});

await expect(thrown).resolves.toBeUndefined();
```

## Auto-detecting synchronous/asynchronous functions

> For best experience, please use synchronous or asynchronous version instead.

`on-error-resume-next/auto` will handle both exceptions (synchronous) and rejections (asynchronous) accordingly.

```js
import { onErrorResumeNext } from 'on-error-resume-next/auto';

// "auto" will return result on returns.
const returned = onErrorResumeNext(() => 'Hello, World!');

expect(returned).toEqual('Hello, World!');

// "auto" will return undefined on throws.
const thrown = onErrorResumeNext(() => {
  throw new Error('Hello, World!');
});

expect(thrown).toEqual(undefined);

// "auto" will return Promise on resolves.
const resolution = onErrorResumeNext(() => Promise.resolve('Hello, World!'));

await expect(resolution).resolves.toBe('Hello, World!');

// "auto" will return Promise on rejects.
const rejection = onErrorResumeNext(() => Promise.reject(new Error()));

await expect(rejection).resolves.toBeUndefined();
```

## Sync vs. async vs. auto

The following table show how each version react with different passing functions.

|                      | Default (sync)            | Async                        | Auto                         |
| -------------------- | ------------------------- | ---------------------------- | ---------------------------- |
| `return 1`           | `1`                       | `Promise.resolve(1)`         | `1`                          |
| `throw 2`            | `undefined`               | `Promise.resolve(undefined)` | `undefined`                  |
| `Promise.resolve(3)` | Not supported, will throw | `Promise.resolve(3)`         | `Promise.resolve(3)`         |
| `Promise.reject(4)`  | Not supported, will throw | `Promise.resolve(undefined)` | `Promise.resolve(undefined)` |

# Contributions

Like us? [Star](https://github.com/compulim/on-error-resume-next/stargazers) us.

Want to make it better? [File](https://github.com/compulim/on-error-resume-next/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/on-error-resume-next/pulls) a pull request.
