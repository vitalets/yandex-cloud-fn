/**
 * See: https://cloud.yandex.ru/docs/functions/concepts/trigger/ymq-trigger#ymq-format
 */

export interface YmqMessage {
  event_metadata: {
    event_id: string;
    event_type: 'yandex.cloud.events.messagequeue.QueueMessage';
    created_at: string;
  };
  details: {
    queue_id: string;
    message: {
      message_id: string;
      md5_of_body: string;
      body: string;
      attributes: Record<string, unknown>;
      message_attributes: Record<string, unknown>;
      md5_of_message_attributes: string;
    }
  };
}
