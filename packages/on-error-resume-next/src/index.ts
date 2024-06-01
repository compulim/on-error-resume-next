import isPromise from './private/isPromise';

export function onErrorResumeNext<T extends () => U, U = unknown>(fn: T, context?: undefined): U | undefined;
export function onErrorResumeNext<T extends (this: V) => U, U = unknown, V = undefined>(
  fn: T,
  context: V
): U | undefined;

export function onErrorResumeNext<T extends (this: V) => U, U = unknown, V = undefined>(
  fn: T,
  context: V
): U | undefined {
  let result: U;

  try {
    result = fn.call(context);
  } catch {
    return undefined;
  }

  if (isPromise(result)) {
    throw new Error('Promise is not supported, please use "on-error-resume-next/async" instead.');
  }

  return result;
}
