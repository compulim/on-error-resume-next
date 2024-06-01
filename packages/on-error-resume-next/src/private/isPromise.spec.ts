import isPromise from './isPromise';

test('passing a Promise object should return true', () => expect(isPromise(new Promise(() => {}))).toBe(true));
test('passing Promise.reject should return true', () => expect(isPromise(Promise.reject().catch(() => {}))).toBe(true));
test('passing Promise.resolve should return true', () => expect(isPromise(Promise.resolve())).toBe(true));
test('passing an empty object should return false', () => expect(isPromise({})).toBe(false));

test('passing a boolean should return false', () => expect(isPromise(true)).toBe(false));
test('passing a Date object should return false', () => expect(isPromise(new Date())).toBe(false));
test('passing a number should return false', () => expect(isPromise(0)).toBe(false));
test('passing a string should return false', () => expect(isPromise('')).toBe(false));
test('passing null should return false', () => expect(isPromise(null)).toBe(false));
test('passing undefined should return false', () => expect(isPromise(undefined)).toBe(false));
