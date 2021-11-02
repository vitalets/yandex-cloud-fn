export * from './timer';
export * from './ymq';
export * from './storage';

import { TimerMessage } from './timer';
import { YmqMessage } from './ymq';
import { StorageMessage } from './storage';
// todo: add other triggers
// see: https://cloud.yandex.ru/docs/functions/concepts/trigger/

export type TriggerMessage = TimerMessage | YmqMessage | StorageMessage;
export type TriggerRequest<T = TriggerMessage> = { messages: T[] };
export type TriggerResponse = void;

export function isTriggerRequest(event: unknown): event is TriggerRequest {
  return Array.isArray((event as TriggerRequest).messages);
}
