/** HTTP handler */

import { Handler, HttpRequest, getHttpBody, sendJson } from '../src';

export const handler: Handler<HttpRequest> = async event => {
  const reqBody = JSON.parse(getHttpBody(event));
  console.log(`Triggered by http request: ${JSON.stringify(reqBody)}`);
  return sendJson({ reqBody });
}
