/**
 * See: https://cloud.yandex.ru/docs/functions/concepts/trigger/os-trigger#ymq-format
 */

import { isTriggerRequest, TriggerRequest } from '.';

export interface StorageMessage {
  event_metadata: {
    event_id: string;
    event_type: string;
    created_at: string;
    cloud_id: string;
    folder_id: string;
    tracing_context: {
      trace_id: string;
      span_id: string;
      parent_span_id: string;
    };
  };
  details: {
    bucket_id: string;
    object_id: string;
  };
}

export type StorageRequest = TriggerRequest<StorageMessage>;

export function isStorageRequest(event: unknown): event is StorageRequest {
  return isTriggerRequest(event) && Boolean((event.messages[0] as StorageMessage)?.details?.bucket_id);
}
