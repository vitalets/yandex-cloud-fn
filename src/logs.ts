/**
 * В логах yandex cloud переносы строк разбивают сообщение на несколько, поэтому их заменяем на \r + пробел.
 * (пробел нужен, чтобы в веб-консоли нормально отображалось)
 * See: https://cloud.yandex.ru/docs/functions/lang/nodejs/logging
 */

import { isYandexCloudEnv } from './env';

export function fixErrorForLogging(e: Error) {
  if (e?.message) e.message = fixValueForLogging(e.message);
  if (e?.stack) e.stack = fixValueForLogging(e.stack);
  return e;
}

export function fixValueForLogging<T>(val: T) {
  return isYandexCloudEnv && typeof val === 'string'
    ? val.replace(/\n/g, '\r ')
    : val;
}

// todo: instrumentConsoleForLogging()
