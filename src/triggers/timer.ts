/**
 * See: https://cloud.yandex.ru/docs/functions/concepts/trigger/timer#timer-format
 */

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
