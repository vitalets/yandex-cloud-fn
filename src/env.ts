/**
 * Определяем, что текущее окружение yandex cloud.
 * See: https://cloud.yandex.ru/docs/functions/concepts/runtime/environment-variables
 */
export const isYandexCloudEnv = Boolean(process.env.AWS_LAMBDA_RUNTIME_API);
