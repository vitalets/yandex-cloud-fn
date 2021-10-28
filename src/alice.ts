/**
 * Интеграция с Алисой.
 */
import { ReqBody, ResBody } from 'alice-types';
import { Handler } from '.';

export function isAliceRequest(event: unknown): event is AliceRequest {
  return Boolean((event as AliceRequest).request);
}

export type AliceRequest = ReqBody;
// Use fake Omit to have 'AliceResponse' in TS messages.
export type AliceResponse = Omit<ResBody, ''>;
export type AliceHandler = Handler<AliceRequest, AliceResponse>;
