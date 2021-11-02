import * as Serverless from '../../src';

describe('http', () => {

  it('isHttpRequest', () => {
    const event = { httpMethod: 'post' };
    assert.equal(Serverless.isHttpRequest(event), true);
  });

  it('getHttpBody', () => {
    const event = {
      ...buildEvent(),
      isBase64Encoded: false,
      body: 'foo'
    };
    assert.equal(Serverless.getHttpBody(event), 'foo');
  });

  it('getHttpBody (base64)', () => {
    const event = {
      ...buildEvent(),
      isBase64Encoded: true,
      body: 'SGVsbG8gV29ybGQ='
    };
    assert.equal(Serverless.getHttpBody(event), 'Hello World');
  });

  it('sendJson', () => {
    const data = { foo: 42 };
    assert.deepEqual(Serverless.sendJson(data), {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      isBase64Encoded: false,
      body: '{"foo":42}',
    });
  });

  function buildEvent() {
    return {
      httpMethod: 'get',
      headers: {},
      multiValueHeaders: {},
      queryStringParameters: {},
      multiValueQueryStringParameters: {},
      requestContext: {
        requestId: '1',
        functionName: '2',
        functionVersion: '3',
        memoryLimitInMB: '10',
      },
      isBase64Encoded: false,
      body: ''
    };
  }
});
