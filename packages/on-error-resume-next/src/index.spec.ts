import { onErrorResumeNext } from './index';

test('parse JSON succeeded', () => {
  const actual = onErrorResumeNext(() => JSON.parse('"Hello, World!"'));

  expect(actual).toBe('Hello, World!');
});

test('parse JSON failed', () => {
  const actual = onErrorResumeNext(() => JSON.parse('error'));

  expect(actual).toBeUndefined();
});
