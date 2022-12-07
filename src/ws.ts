import { RequestContextHttp } from './http.js';

export type RequestContextWebsocket =
  WebsocketConnect | WebsocketMessage | WebsocketDisconnect;

interface WebsocketCommon extends RequestContextHttp {
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
