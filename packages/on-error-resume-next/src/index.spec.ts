import { onErrorResumeNext } from './index';

describe('return', () => {
  let actual: string | undefined;
  let fn: jest.Mock<string>;
  let thisArg: object;

  beforeEach(() => {
    fn = jest.fn(() => JSON.parse('"Hello, World!"'));
    thisArg = {};
    actual = onErrorResumeNext(fn, thisArg);
  });

  test('should return the result', () => expect(actual).toBe('Hello, World!'));
  test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
  test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
});

describe('throw', () => {
  let actual: string | undefined;
  let fn: jest.Mock<string>;
  let thisArg: object;

  beforeEach(() => {
    fn = jest.fn(() => JSON.parse('error'));
    thisArg = {};
    actual = onErrorResumeNext(fn, thisArg);
  });

  test('should return undefined', () => expect(actual).toBeUndefined());
  test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
  test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
});

describe('resolve', () => {
  let fn: jest.Mock<Promise<number>>;
  let thisArg: object;

  beforeEach(() => {
    fn = jest.fn(() => Promise.resolve(1));
    thisArg = {};
  });

  test('should throw', () =>
    expect(() => onErrorResumeNext(fn, thisArg)).toThrow(
      'Promise is not supported, please use "on-error-resume-next/async" instead.'
    ));
});

describe('reject', () => {
  let fn: jest.Mock<Promise<unknown>>;
  let thisArg: object;

  beforeEach(() => {
    fn = jest.fn(() => Promise.reject(new Error('error')).catch(() => {}));
    thisArg = {};
  });

  test('should throw', () =>
    expect(() => onErrorResumeNext(fn, thisArg)).toThrow(
      'Promise is not supported, please use "on-error-resume-next/async" instead.'
    ));
});
