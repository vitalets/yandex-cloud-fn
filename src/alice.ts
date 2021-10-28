/**
 * Интеграция с Алисой.
 */
import { ReqBody as AliceRequest, ResBody as AliceResponse } from 'alice-types';
import { Handler } from '.';

export function isAliceRequest(event: unknown): event is AliceRequest {
  return Boolean((event as AliceRequest).request);
}

export { AliceRequest, AliceResponse };
export type AliceHandler = Handler<AliceRequest, AliceResponse>;
