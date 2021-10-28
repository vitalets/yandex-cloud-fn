# yandex-cloud-fn
Хелперы для Node.js функций в Yandex Cloud.

## Что включает
* types (event, context, triggers, etc)
* `getRequestBody`
* `isHttpRequest` / `isTriggerRequest`
* `sendJson`

## Установка
```
npm i -D yandex-cloud-fn
```

## Использование
```ts
import { Handler, isHttpRequest, sendJson } from 'yandex-cloud-fn';

export const handler: Handler = async (event, context) => {
  if (isHttpRequest(event)) {
    return sendJson(event);
  }
}
```

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
