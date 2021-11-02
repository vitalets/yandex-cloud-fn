/** Mixed handler */

import { Handler, HttpRequest, TimerRequest, isHttpRequest, sendJson } from '../src';

export const handler: Handler<HttpRequest | TimerRequest> = async event => {
  if (isHttpRequest(event)) {
    console.log(`Triggered by http request: ${event.httpMethod}`);
    return sendJson({ ok: true });
  } else {
    console.log(`Triggered by timer: ${event.messages[0].details.trigger_id}`);
  }
}
