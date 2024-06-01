import { onErrorResumeNext as onErrorResumeNextSync } from 'on-error-resume-next';
import { onErrorResumeNext as onErrorResumeNextAsync } from 'on-error-resume-next/async';
import { onErrorResumeNext as onErrorResumeNextAuto } from 'on-error-resume-next/auto';

describe('sync', () => {
  describe('return', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => JSON.parse('"Hello, World!"'));
      thisArg = {};
      actual = onErrorResumeNextSync(fn, thisArg);
    });

    test('should return the result', () => expect(actual).toBe('Hello, World!'));
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('throw', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => JSON.parse('error'));
      thisArg = {};
      actual = onErrorResumeNextSync(fn, thisArg);
    });

    test('should return undefined', () => expect(actual).toBeUndefined());
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('resolve', () => {
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => Promise.resolve(1));
      thisArg = {};
    });

    test('should throw', () => expect(() => onErrorResumeNextSync(fn, thisArg)).toThrow());
  });

  describe('reject', () => {
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => Promise.reject(new Error('error')).catch(() => {}));
      thisArg = {};
    });

    test('should throw', () => expect(() => onErrorResumeNextSync(fn, thisArg)).toThrow());
  });
});

describe('async', () => {
  describe('return', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => 'Hello, World!');
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    test('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    test('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('throw', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => {
        throw new Error('Hello, World!');
      });
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    test('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    test('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('resolve', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => Promise.resolve('Hello, World!'));
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    test('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    test('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('reject', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => Promise.reject(new Error('Hello, World!')));
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    test('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    test('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });
});

describe('auto', () => {
  describe('return', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => JSON.parse('"Hello, World!"'));
      thisArg = {};
      actual = onErrorResumeNextAuto(fn, thisArg);
    });

    test('should return the result', () => expect(actual).toBe('Hello, World!'));
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('throw', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => JSON.parse('error'));
      thisArg = {};
      actual = onErrorResumeNextAuto(fn, thisArg);
    });

    test('should return undefined', () => expect(actual).toBeUndefined());
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('resolve', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => Promise.resolve('Hello, World!'));
      thisArg = {};
      resultPromise = onErrorResumeNextAuto(fn, thisArg);
    });

    test('should return a Promise', () => expect(typeof resultPromise?.then).toBe('function'));
    test('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('promise failed asynchronously', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => Promise.reject(new Error('Hello, World!')));
      thisArg = {};
      resultPromise = onErrorResumeNextAuto(fn, thisArg);
    });

    test('should return a Promise', () => expect(typeof resultPromise?.then).toBe('function'));
    test('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });

  describe('reject', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = jest.fn(() => {
        throw new Error('Hello, World!');
      });
      thisArg = {};
      resultPromise = onErrorResumeNextAuto(fn, thisArg);
    });

    test('should return undefined', () => expect(resultPromise).toBeUndefined());
    test('should call the function once', () => expect(fn).toHaveBeenCalledTimes(1));
    test('should call the function with context', () => expect(fn.mock.contexts[0]).toBe(thisArg));
  });
});
