import { HttpRequest, isHttpRequest } from './http';

export interface WebsocketRequest extends HttpRequest {
  requestContext: WebsocketConnect | WebsocketMessage | WebsocketDisconnect
}

type HttpRequestContext = HttpRequest['requestContext'];

interface WebsocketCommon extends HttpRequestContext {
  connectionId: string;
  connectedAt: number;
}

export interface WebsocketConnect extends WebsocketCommon {
  eventType: 'CONNECT'
}

export interface WebsocketMessage extends WebsocketCommon {
  eventType: 'MESSAGE'
  messageId: string;
}

export interface WebsocketDisconnect extends WebsocketCommon {
  eventType: 'DISCONNECT'
  disconnectStatusCode: number;
  disconnectReason: string;
}

export function isWebsocketRequest(event: unknown): event is WebsocketRequest {
  return isHttpRequest(event) && 'connectionId' in event.requestContext;
}
