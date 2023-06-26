// デフォルトのテーマ値
const defaultTheme = require('tailwindcss/defaultTheme')
// 色のデフォルト値
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    // 色の設定
    colors: {
      'main': '#1fb6ff',
      'border-color': '#aaaaaa',
      'white': { // １関連色を定義することも可能
        100: '#ffffff',
        200: '#f1f1f1',
        300: '#efefef',
        400: '#e1e1e1',
      }
    },
    hoge: {
      'hoge': 'red'
    },
    // opacityの設定
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    // ボーダー色の設定
    borderColor: ({ theme }) => ({
      // hogeの値を継承
      ...theme('hoge'),
    }),
    extend: {},
  },
  /** :hoverや:xxxxなどの定義 */
  variants: {
    extend: {},
  },
  plugins: [],
};
