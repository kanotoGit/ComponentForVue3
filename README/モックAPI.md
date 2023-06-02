## mswのインストール

```bash
yarn add msw
```



## 初期設定

```bash
npx msw init ../public --save
```

```ts
// ./src/main.ts

// developmentのみでモックAPIを使用する
if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}
```

```ts
// ./src/mocks/browser.ts

import { setupWorker, type SetupWorker } from 'msw'
import { handlers } from './handlers'

// ハンドラに書かれた定義をService Workerに設定する
export const worker: SetupWorker = setupWorker(...handlers)
```




## エンドポイントの追加


```ts
// ./src/mocks/handlers.ts

import { MockedRequest, RestHandler, rest, type DefaultBodyType } from 'msw'

export const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  // post
  rest.post('/api/login', (reqest, response, context) => {
    return response(
      context.delay(1000),
      context.status(200),
      context.json({
        token: 'abcde'
      })
    )
  }),
]
```