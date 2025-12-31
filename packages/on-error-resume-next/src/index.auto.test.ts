import { expect } from 'expect';
import { describe, beforeEach, mock, test, type Mock } from 'node:test';
import { onErrorResumeNext } from './index.auto.ts';

describe('return', () => {
  let actual: string | undefined;
  let fn: Mock<() => string>;
  let thisArg: object;

  beforeEach(() => {
    fn = mock.fn(() => JSON.parse('"Hello, World!"'));
    thisArg = {};
    actual = onErrorResumeNext(fn, thisArg);
  });

  test('should return the result', () => expect(actual).toBe('Hello, World!'));
  test('should call the function once', () => expect(fn.mock.callCount()).toBe(1));
  test('should call the function with context', () => expect(fn.mock.calls[0]?.this).toBe(thisArg));
});

describe('throw', () => {
  let actual: string | undefined;
  let fn: Mock<() => string>;
  let thisArg: object;

  beforeEach(() => {
    fn = mock.fn(() => JSON.parse('error'));
    thisArg = {};
    actual = onErrorResumeNext(fn, thisArg);
  });

  test('should return undefined', () => expect(actual).toBeUndefined());
  test('should call the function once', () => expect(fn.mock.callCount()).toBe(1));
  test('should call the function with context', () => expect(fn.mock.calls[0]?.this).toBe(thisArg));
});

describe('resolve', () => {
  let fn: Mock<() => Promise<string>>;
  let resultPromise: Promise<string | undefined> | undefined;
  let thisArg: object;

  beforeEach(() => {
    fn = mock.fn(() => Promise.resolve('Hello, World!'));
    thisArg = {};
    resultPromise = onErrorResumeNext(fn, thisArg);
  });

  test('should return a Promise', () => expect(typeof resultPromise?.then).toBe('function'));
  test('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
  test('should call the function once', () => expect(fn.mock.callCount()).toBe(1));
  test('should call the function with context', () => expect(fn.mock.calls[0]?.this).toBe(thisArg));
});

describe('reject', () => {
  let fn: Mock<() => Promise<never>>;
  let resultPromise: Promise<string | undefined> | undefined;
  let thisArg: object;

  beforeEach(() => {
    fn = mock.fn(() => Promise.reject(new Error('Hello, World!')));
    thisArg = {};
    resultPromise = onErrorResumeNext(fn, thisArg);
  });

  test('should return a Promise', () => expect(typeof resultPromise?.then).toBe('function'));
  test('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
  test('should call the function once', () => expect(fn.mock.callCount()).toBe(1));
  test('should call the function with context', () => expect(fn.mock.calls[0]?.this).toBe(thisArg));
});
