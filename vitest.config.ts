import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      // カバレッジ
      coverage: {
        provider: 'c8', // or 'istanbul'
        reporter: ['text', 'json', 'html'],
      },
      // snapshotの出力パス
      resolveSnapshotPath: (testPath: string, snapExtension: string) => testPath + snapExtension,
      // セットアップ
      setupFiles: [
        './src/vitest.setup.ts'
      ],
      // モック
      mockReset: true,
    }
  })
)
