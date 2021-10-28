/**
 * Интеграция с Алисой.
 */
import { ReqBody, ResBody } from 'alice-types';

export function isAliceRequest(event: unknown): event is AliceRequest {
  return Boolean((event as AliceRequest).request);
}

export type AliceRequest = ReqBody;
export type AliceResponse = ResBody;
