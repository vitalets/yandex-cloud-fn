/**
 * See: https://cloud.yandex.ru/docs/functions/concepts/trigger/timer#timer-format
 */

import { TriggerRequest, isTriggerRequest } from '.';

export interface TimerMessage {
  event_metadata: {
    event_id: string;
    event_type: 'yandex.cloud.events.serverless.triggers.TimerMessage';
    created_at: string;
    cloud_id: string;
    folder_id: string;
  };
  details: {
    trigger_id: string;
  };
}

export type TimerRequest = TriggerRequest<TimerMessage>;

export function isTimerRequest(event: unknown): event is TimerRequest {
  return isTriggerRequest(event) && Boolean((event.messages[0] as TimerMessage)?.details?.trigger_id);
}
