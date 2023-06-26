## utility一覧

↓↓らへんに記載
https://tailwindcss.com/docs/aspect-ratio


## hover(その他疑似クラス)

`hover:xxxxx`のようにすることでhover時の挙動を調整できる

```html
<div class="text-red-500 hover:text-red-900"></div>
```


## 色やサイズを動的に設定

https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values

```html
<div>
  <p class="mt-[10px] text-[#663399] text-[20px]">テキストテキストテキストテキストテキスト</p>
</div>
```


## レスポンシブ

`md:xxxxx`のようにすることでレスポンシブに出来る

```html
<div>
  <p class="hidden max-sm:block">sm未満</p>
  <p class="hidden sm:max-md:block">sm</p>
  <p class="hidden md:max-lg:block">md</p>
  <p class="hidden lg:max-xl:block">lg</p>
  <p class="hidden xl:max-2xl:block">xl</p>
  <p class="hidden 2xl:block">2xl</p>
  <hr class="my-2">
  <p class="hidden sm:block">sm以上</p>
  <p class="hidden md:block">md以上</p>
  <p class="hidden lg:block">lg以上</p>
  <p class="hidden xl:block">xl以上</p>
  <p class="hidden 2xl:block">2xl以上</p>
</div>
```

ブレイクポイントを直接定義できる

```html
<div>
  <p>
</div>
```