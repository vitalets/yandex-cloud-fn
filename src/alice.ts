/**
 * Интеграция с Алисой.
 */
import { ReqBody, ResBody } from 'alice-types';
import { Handler } from '.';

export function isAliceRequest(event: unknown): event is AliceRequest {
  return Boolean((event as AliceRequest).request);
}

// Use fake Omit to have AliceRequest/AliceResponse in TS messages.
export type AliceRequest = Omit<ReqBody, ''>;
export type AliceResponse = Omit<ResBody, ''>;
export type AliceHandler = Handler<AliceRequest, AliceResponse>;
