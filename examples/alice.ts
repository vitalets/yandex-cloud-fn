/** Alice handler */

import { Handler, AliceRequest } from '../src';

export const handler: Handler<AliceRequest> = async event => {
  console.log(`Triggered by alice request: ${JSON.stringify(event)}`);
  return {
    response: {
      text: `Вы сказали: ${event.request.command}`,
      end_session: false,
    },
    version: '1.0'
  };
}
