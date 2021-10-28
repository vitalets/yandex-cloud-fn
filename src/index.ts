export * from './http';
export * from './triggers';
export * from './alice';
export * from './context';

import { HttpRequest, HttpResponse, HttpHandler } from './http';
import { TriggerRequest, TriggerResponse, TriggerHandler } from './triggers';
import { AliceRequest, AliceResponse, AliceHandler } from './alice';

export type Request = HttpRequest | TriggerRequest | AliceRequest;
export type Response = HttpResponse | TriggerResponse | AliceResponse;
export type Handler = HttpHandler | TriggerHandler | AliceHandler;
