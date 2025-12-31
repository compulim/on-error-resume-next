import { expect } from 'expect';
import { beforeEach, describe, it } from 'node:test';
import { onErrorResumeNext as onErrorResumeNextSync } from 'on-error-resume-next';
import { onErrorResumeNext as onErrorResumeNextAsync } from 'on-error-resume-next/async';
import { onErrorResumeNext as onErrorResumeNextAuto } from 'on-error-resume-next/auto';
import { fake } from 'sinon';

describe('sync', () => {
  describe('return', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => JSON.parse('"Hello, World!"'));
      thisArg = {};
      actual = onErrorResumeNextSync(fn, thisArg);
    });

    it('should return the result', () => expect(actual).toBe('Hello, World!'));
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('throw', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => JSON.parse('error'));
      thisArg = {};
      actual = onErrorResumeNextSync(fn, thisArg);
    });

    it('should return undefined', () => expect(actual).toBeUndefined());
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('resolve', () => {
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => Promise.resolve(1));
      thisArg = {};
    });

    it('should throw', () => expect(() => onErrorResumeNextSync(fn, thisArg)).toThrow());
  });

  describe('reject', () => {
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => Promise.reject(new Error('error')).catch(() => {}));
      thisArg = {};
    });

    it('should throw', () => expect(() => onErrorResumeNextSync(fn, thisArg)).toThrow());
  });
});

describe('async', () => {
  describe('return', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => 'Hello, World!');
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    it('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    it('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('throw', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => {
        throw new Error('Hello, World!');
      });
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    it('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    it('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('resolve', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => Promise.resolve('Hello, World!'));
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    it('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    it('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('reject', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => Promise.reject(new Error('Hello, World!')));
      thisArg = {};
      resultPromise = onErrorResumeNextAsync(fn, thisArg);
    });

    it('should return a Promise', () => expect(typeof resultPromise.then).toBe('function'));
    it('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });
});

describe('auto', () => {
  describe('return', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => JSON.parse('"Hello, World!"'));
      thisArg = {};
      actual = onErrorResumeNextAuto(fn, thisArg);
    });

    it('should return the result', () => expect(actual).toBe('Hello, World!'));
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('throw', () => {
    let actual;
    let fn;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => JSON.parse('error'));
      thisArg = {};
      actual = onErrorResumeNextAuto(fn, thisArg);
    });

    it('should return undefined', () => expect(actual).toBeUndefined());
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('resolve', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => Promise.resolve('Hello, World!'));
      thisArg = {};
      resultPromise = onErrorResumeNextAuto(fn, thisArg);
    });

    it('should return a Promise', () => expect(typeof resultPromise?.then).toBe('function'));
    it('should resolve to the result', () => expect(resultPromise).resolves.toBe('Hello, World!'));
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });

  describe('reject', () => {
    let fn;
    let resultPromise;
    let thisArg;

    beforeEach(() => {
      fn = fake(() => Promise.reject(new Error('Hello, World!')));
      thisArg = {};
      resultPromise = onErrorResumeNextAuto(fn, thisArg);
    });

    it('should return a Promise', () => expect(typeof resultPromise?.then).toBe('function'));
    it('should resolve to undefined', () => expect(resultPromise).resolves.toBeUndefined());
    it('should call the function once', () => expect(fn).toHaveProperty('callCount', 1));
    it('should call the function with context', () => expect(fn.getCall(0)).toHaveProperty('thisValue', thisArg));
  });
});
