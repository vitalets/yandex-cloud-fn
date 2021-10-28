/** see: https://cloud.yandex.ru/docs/functions/concepts/function-invoke#service-data */
export interface Context {
  requestId: string;
  functionName: string;
  functionVersion: string;
  memoryLimitInMB: string;
  token?: {
    access_token: string;
  }
}
