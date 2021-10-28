import { Context } from '../context';
import { StorageMessage } from './storage';
import { TimerMessage } from './timer';
import { YmqMessage } from './ymq';
// todo: add other triggers
// see: https://cloud.yandex.ru/docs/functions/concepts/trigger/

export type TriggerMessage = TimerMessage | YmqMessage | StorageMessage;
export interface TriggerRequest {
  messages: TriggerMessage[];
}
export type TriggerResponse = void;
export type TriggerHandler = (request: TriggerMessage, context: Context) => TriggerResponse | Promise<TriggerResponse>;
export function isTriggerRequest(event: unknown): event is TriggerRequest {
  return Array.isArray((event as TriggerRequest).messages);
}
