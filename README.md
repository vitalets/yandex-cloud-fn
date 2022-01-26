# yandex-cloud-fn
Runtime-хелперы для Node.js функций в Yandex Cloud.

## Что включает
* покрытие типами: `event`, `context`, итд
* определение источника запроса: `isHttpRequest`, `isTimerRequest`, итд
* получение тела запроса (с учетом base64): `getHttpBody`
* отправка json ответа: `sendJson`
* корректное логирование: `fixConsoleForLogging`, `fixValueForLogging`.

## Установка
```
npm i -D yandex-cloud-fn
```

## Использование
```ts
import { Handler, HttpRequest, TimerRequest, isHttpRequest, sendJson } from 'yandex-cloud-fn';

export const handler: Handler<HttpRequest | TimerRequest> = async event => {
  if (isHttpRequest(event)) {
    const reqBody = JSON.parse(getHttpBody(event));
    console.log(`Triggered by http request: ${JSON.stringify(reqBody)}`);
    return sendJson({ ok: true });
  } else {
    console.log(`Triggered by timer: ${event.messages[0].details.trigger_id}`);
  }
}
```
Больше примеров в папке [/examples](/examples).

## Доступные методы
tbd

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
