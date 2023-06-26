## 全てのconfig

https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js


## ブレイクポイントのカスタマイズ

https://tailwindcss.com/docs/screens

```ts
// tailwind.config.ts

module.exports = {
  theme: {
    screens: {
      'sm': '640px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '1024px', // => @media (min-width: 1024px) { ... }
      'xl': '1280px', // => @media (min-width: 1280px) { ... }
      '2xl': '1536px', // => @media (min-width: 1536px) { ... }
      'hoge': '1000px', // 独自定義
      'foo': { 'max': '1000px' } // @media (max-width: 1000px) ※モバイルファースト用
    }
  }
}
```


## 色のカスタマイズ

https://tailwindcss.com/docs/customizing-colors

```ts
// tailwind.config.ts

module.exports = {
  theme: {
    colors: {
      'main': '#1fb6ff',
      'border': '#aaaaaa'
    },
  }
}
```



## 他の値の参照

https://tailwindcss.com/docs/theme#referencing-other-values

```ts
// tailwind.config.ts

module.exports = {
  theme: {
    hoge: {
      'hoge': 'red'
    },
    borderColor: ({ theme }) => ({
      // hogeの値を継承
      ...theme('hoge'),
    })
  }
}
```