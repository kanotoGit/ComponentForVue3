import { setupWorker, type SetupWorker } from 'msw'
import { handlers } from './handlers'

// ハンドラに書かれた定義をService Workerに設定する
export const worker: SetupWorker = setupWorker(...handlers)