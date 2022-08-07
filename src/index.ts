export * from './context';
export * from './logs';
export * from './env';
export * from './http';
export * from './triggers';
export * from './alice';
export * from './smarthome';

import { Context } from './context';
import { HttpRequest, HttpResponse } from './http';
import { AliceRequest, AliceResponse } from './alice';
import { SmarthomeRequest, SmarthomeResponse } from './smarthome';

// todo: map types dynamically?
// see: https://fettblog.eu/typescript-type-maps/
export type Response<Req> =
  Req extends HttpRequest ? HttpResponse :
  Req extends AliceRequest ? AliceResponse :
  Req extends SmarthomeRequest ? SmarthomeResponse :
  void;

export type Handler<Req> = (request: Req, context: Context) => Response<Req> | Promise<Response<Req>>;
