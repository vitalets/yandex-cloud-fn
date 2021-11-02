export * from './http';
export * from './triggers';
export * from './alice';
export * from './context';

import { Context } from './context';
import { HttpRequest, HttpResponse } from './http';
import { AliceRequest, AliceResponse } from './alice';

// todo: map types dynamically?
// see: https://fettblog.eu/typescript-type-maps/
export type Response<Req> =
  Req extends HttpRequest ? HttpResponse :
  Req extends AliceRequest ? AliceResponse :
  void;

export type Handler<Req> = (request: Req, context: Context) => Response<Req> | Promise<Response<Req>>;
