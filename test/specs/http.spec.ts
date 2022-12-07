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
      httpMethod: 'GET',
      headers: {},
      multiValueHeaders: {},
      queryStringParameters: {},
      multiValueQueryStringParameters: {},
      requestContext: {
        requestId: '1',
        identity: { sourceIp: '141.136.91.132', userAgent: 'Go-http-client/1.1' },
        httpMethod: 'GET',
        requestTime: '7/Dec/2022:06:31:58 +0000',
        requestTimeEpoch: 1670394718
      },
      isBase64Encoded: false,
      body: '',
      path: ''
    };
  }
});
