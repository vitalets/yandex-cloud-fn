/**
 * Запросы умного дома.
 * https://yandex.ru/dev/dialogs/smart-home/doc/reference/resources.html#json-rpc
 */

// todo: import from alice-types
export type SmarthomeRequest = {
  headers: {
    request_id: string,
    authorization: string,
  },
  request_type: 'discovery' | 'query' | 'action' | 'unlink',
  payload?: unknown,
  api_version: '1.0',
}

export type SmarthomeResponse = {
  request_id: string,
  payload?: unknown,
}

export function isSmarthomeRequest(event: unknown): event is SmarthomeRequest {
  return Boolean((event as SmarthomeRequest).headers?.request_id);
}
