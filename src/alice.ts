/**
 * Интеграция с Алисой.
 */
import { ReqBody, ResBody } from 'alice-types';
import { Context } from './context';

export function isAliceRequest(event: unknown): event is AliceRequest {
  return Boolean((event as AliceRequest).request);
}

export type AliceRequest = ReqBody;
export type AliceResponse = ResBody;
export type AliceHandler = (request: AliceRequest, context: Context) => AliceResponse | Promise<AliceResponse>;
