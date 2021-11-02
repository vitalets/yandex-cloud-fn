# yandex-cloud-fn
Хелперы для Node.js функций в Yandex Cloud.

## Что включает
* typings (event, context, triggers, etc)
* detect request type: http, timer, ymq, etc
* getting request body (handle base64 encode)
* sending json response

## Установка
```
npm i -D yandex-cloud-fn
```

## Использование

```ts
import { Handler, HttpRequest, TimerRequest, isHttpRequest, sendJson } from 'yandex-cloud-fn';

export const handler: Handler<HttpRequest | TimerRequest> = async event => {
  if (isHttpRequest(event)) {
    console.log(`Triggered by http request: ${event.httpMethod}`);
    return sendJson({ ok: true });
  } else {
    console.log(`Triggered by timer: ${event.messages[0].details.trigger_id}`);
  }
}
```

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
