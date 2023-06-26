<script lang="ts" setup>
</script>

<template>
  <div>
    <p class="tw-text-main hover:tw-opacity-40">テキストテキスト</p>

    <h1 class="tw-mt-10 tw-text-2xl tw-font-bold">色やサイズを動的に設定</h1>
    <div>
      <p class="tw-mt-[10px] tw-text-[#663399] tw-text-[20px]">テキストテキストテキストテキストテキスト</p>
    </div>

    <h1 class="tw-mt-10 tw-text-2xl tw-font-bold">レスポンシブ</h1>
    <div>
      <p class="tw-hidden max-sm:tw-block">sm未満</p>
      <p class="tw-hidden sm:max-md:tw-block">sm</p>
      <p class="tw-hidden md:max-lg:tw-block">md</p>
      <p class="tw-hidden lg:max-xl:tw-block">lg</p>
      <p class="tw-hidden xl:max-2xl:tw-block">xl</p>
      <p class="tw-hidden 2xl:tw-block">2xl</p>
      <hr class="my-2">
      <p class="tw-hidden sm:tw-block">sm以上</p>
      <p class="tw-hidden md:tw-block">md以上</p>
      <p class="tw-hidden lg:tw-block">lg以上</p>
      <p class="tw-hidden xl:tw-block">xl以上</p>
      <p class="tw-hidden 2xl:tw-block">2xl以上</p>
      <hr class="my-2">
      <div class="min-[320px]:tw-text-center max-[600px]:tw-bg-sky-300">aaaa</div>
      <p class="tw-hidden max-[600px]:tw-block">600px以上</p>
    </div>

    <h1 class="tw-mt-10 tw-text-2xl tw-font-bold">スタイルの再利用</h1>
    <div class="hoge">テキストテキスト</div>
    <div class="hoge">テキストテキスト</div>

    <h1 class="tw-mt-10 tw-text-2xl tw-font-bold">色の定義</h1>
    <p class="tw-text-main tw-font-bold tw-border-2 tw-border-hoge tw-w-80">メインカラー</p>

    <button class="tw-button">saaaa</button>
  </div>
</template>

<style lang="scss" scoped>
.hoge {
  @apply tw-font-bold tw-text-[30px] tw-text-[#993366]
}
</style>