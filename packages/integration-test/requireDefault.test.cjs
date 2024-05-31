const { onErrorResumeNext } = require('on-error-resume-next');
const { onErrorResumeNext: onErrorResumeNextAsync } = require('on-error-resume-next/async');

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
