export * from './http';
export * from './triggers';
export * from './alice';
export * from './context';

import { HttpRequest, HttpResponse } from './http';
import { TriggerRequest, TriggerResponse } from './triggers';
import { AliceRequest, AliceResponse } from './alice';
import { Context } from './context';

export type Request = HttpRequest | TriggerRequest | AliceRequest;
export type Response = HttpResponse | TriggerResponse | AliceResponse;
export type Handler<Req = Request, Res = Response> = (request: Req, context: Context) => Res | Promise<Res>;
