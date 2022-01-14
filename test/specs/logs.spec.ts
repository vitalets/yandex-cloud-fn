import * as Serverless from '../../src';

describe('logs', () => {

  it('fixValueForLogging', () => {
    const str = Serverless.fixValueForLogging('a\nb\nc');
    assert.equal(str, 'a\r b\r c');
  });

});
