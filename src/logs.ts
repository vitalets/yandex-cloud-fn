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

let consoleFixed = false;

/**
 * Instruments all console methods to replace '\n' for yandex cloud correct logs.
 */
export function fixConsoleForLogging() {
  if (!isYandexCloudEnv || consoleFixed) return;
  const methods = [ 'debug', 'log', 'info', 'warn', 'error', 'time', 'timeLog', 'timeEnd' ] as const;
  for (const method of methods) {
    // eslint-disable-next-line no-console
    const orig = console[method];
    // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
    console[method] = (...args: any[]) => {
      orig.apply(console, args.map(a => fixValueForLogging(a)));
    };
  }
  consoleFixed = true;
}

