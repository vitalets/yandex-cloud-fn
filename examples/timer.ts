/** Timer handler */

import { Handler, TimerRequest } from '../src';

export const handler: Handler<TimerRequest> = async event => {
  console.log(`Triggered by timer: ${event.messages[0].details.trigger_id}`);
}
