import { onErrorResumeNext } from 'on-error-resume-next';
import { onErrorResumeNext as onErrorResumeNextAsync } from 'on-error-resume-next/async';

describe('simple sync scenario', () => {
  let result;

  beforeEach(() => {
    result = onErrorResumeNext(() => {
      throw new Error('Artificial error.');
    });
  });

  test('should work', () => expect(result).toBeUndefined());
});

describe('simple async scenario', () => {
  let result;

  beforeEach(async () => {
    result = await onErrorResumeNextAsync(() => Promise.reject('Artificial error.'));
  });

  test('should work', () => expect(result).toBeUndefined());
});
