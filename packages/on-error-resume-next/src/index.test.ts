import { expect } from 'expect';
import { describe, beforeEach, mock, test, type Mock } from 'node:test';
import { onErrorResumeNext } from './index.ts';

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
  let fn: Mock<() => Promise<number>>;
  let thisArg: object;

  beforeEach(() => {
    fn = mock.fn(() => Promise.resolve(1));
    thisArg = {};
  });

  test('should throw', () =>
    expect(() => onErrorResumeNext(fn, thisArg)).toThrow(
      'Promise is not supported, please use "on-error-resume-next/async" instead.'
    ));
});

describe('reject', () => {
  let fn: Mock<() => Promise<unknown>>;
  let thisArg: object;

  beforeEach(() => {
    fn = mock.fn(() => Promise.reject(new Error('error')).catch(() => {}));
    thisArg = {};
  });

  test('should throw', () =>
    expect(() => onErrorResumeNext(fn, thisArg)).toThrow(
      'Promise is not supported, please use "on-error-resume-next/async" instead.'
    ));
});
