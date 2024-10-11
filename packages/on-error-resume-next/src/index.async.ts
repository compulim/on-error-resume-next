import isPromise from './private/isPromise.ts';

export function onErrorResumeNext<T extends () => Promise<U>, U = unknown>(
  fn: T,
  context?: undefined
): Promise<U | undefined>;

export function onErrorResumeNext<T extends (this: V) => Promise<U>, U = unknown, V = undefined>(
  fn: T,
  context: V
): Promise<U | undefined>;

export function onErrorResumeNext<T extends (this: V) => Promise<U>, U = unknown, V = undefined>(
  fn: T,
  context: V
): Promise<U | undefined> {
  return new Promise<U | undefined>(resolve => {
    try {
      const result = fn.call(context);

      if (isPromise(result)) {
        result.then(resolve, () => resolve(undefined));
      } else {
        resolve(result);
      }
    } catch {
      resolve(undefined);
    }
  });
}
