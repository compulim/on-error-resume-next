export default function isPromise(value: unknown): value is PromiseLike<unknown> {
  return !!(
    (typeof value === 'function' || typeof value === 'object') &&
    value &&
    'then' in value &&
    typeof value.then === 'function'
  );
}
