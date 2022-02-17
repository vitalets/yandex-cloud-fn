import * as Serverless from '../../src';

describe('logs', () => {

  it('fixValueForLogging: string', () => {
    const str = Serverless.fixValueForLogging('a\nb\nc');
    assert.equal(str, 'a\r b\r c');
  });

  it('fixValueForLogging: object', () => {
    const str = Serverless.fixValueForLogging({ foo: 42 });
    assert.equal(str, '{"foo":42}');
  });

});
