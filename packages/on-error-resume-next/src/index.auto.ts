import isPromise from './private/isPromise';

export function onErrorResumeNext<T extends () => U, U = unknown>(fn: T, context?: undefined): U | undefined;
export function onErrorResumeNext<T extends (this: V) => U, U = unknown, V = undefined>(
  fn: T,
  context: V
): U | undefined;

export function onErrorResumeNext<T extends () => Promise<U>, U = unknown>(
  fn: T,
  context?: undefined
): Promise<U | undefined>;

export function onErrorResumeNext<T extends (this: V) => Promise<U>, U = unknown, V = undefined>(
  fn: T,
  context: V
): Promise<U | undefined>;

export function onErrorResumeNext<T extends (this: V) => U | Promise<U>, U = unknown, V = undefined>(
  fn: T,
  context: V
): U | undefined | Promise<U | undefined> {
  try {
    const result = fn.call(context);

    if (isPromise(result)) {
      return new Promise<U | undefined>(resolve => result.then(resolve, () => resolve(undefined)));
    }

    return result;
  } catch {
    return undefined;
  }
}
