import { Context } from './context';

/** See: https://cloud.yandex.ru/docs/functions/concepts/function-invoke#request */
export interface HttpRequest {
  httpMethod: string;
  headers: Record<string, string>;
  multiValueHeaders: Record<string, string[]>;
  queryStringParameters: Record<string, string>;
  multiValueQueryStringParameters: Record<string, string[]>;
  requestContext: Context;
  body: string;
  isBase64Encoded: boolean;
}

export interface HttpResponse {
  statusCode: number;
  headers?: Record<string, string>;
  isBase64Encoded?: boolean;
  body?: string;
}

export function isHttpRequest(event: unknown): event is HttpRequest {
  return Boolean((event as HttpRequest).httpMethod);
}

export function getHttpBody(event: HttpRequest): string {
  const { body, isBase64Encoded } = event;
  return isBase64Encoded ? decodeBase64(body) : body;
}

export function sendJson(data: unknown, statusCode = 200): HttpResponse {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    isBase64Encoded: false,
    body: JSON.stringify(data),
  };
}

function decodeBase64(s: string) {
  return Buffer.from(s, 'base64').toString('utf8');
}
