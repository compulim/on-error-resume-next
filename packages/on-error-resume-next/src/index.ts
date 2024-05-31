export function onErrorResumeNext<T extends () => U, U = unknown>(fn: T, context?: undefined): U | undefined;
export function onErrorResumeNext<T extends (this: V) => U, U = unknown, V = undefined>(
  fn: T,
  context: V
): U | undefined;

export function onErrorResumeNext<T extends (this: V) => U, U = unknown, V = undefined>(
  fn: T,
  context: V
): U | undefined {
  try {
    return fn.call(context);
  } catch {
    return;
  }
}
