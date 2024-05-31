import { onErrorResumeNext } from './index.async';

test('promise succeeded', async () => {
  const promiseCall = jest.fn();
  const actual = onErrorResumeNext(() => {
    promiseCall();

    return Promise.resolve('Hello, World!');
  });

  expect(promiseCall).toHaveBeenCalledTimes(1);
  expect(actual).resolves.toBe('Hello, World!');
});

test('promise failed', async () => {
  const promiseCall = jest.fn();
  const actual = onErrorResumeNext(() => {
    promiseCall();

    return Promise.reject('Hello, World!');
  });

  expect(promiseCall).toHaveBeenCalledTimes(1);
  expect(actual).resolves.toBeUndefined();
});

test('promise failed synchronously', async () => {
  const promiseCall = jest.fn();
  const actual = onErrorResumeNext(async () => {
    promiseCall();

    throw new Error();
  });

  expect(promiseCall).toHaveBeenCalledTimes(1);
  expect(actual).resolves.toBeUndefined();
});
