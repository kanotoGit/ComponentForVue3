<script lang="ts" setup>
import { inject } from 'vue'

/** ページ全体をリセットするメソッド */
const resetPage = inject<Function>('resetPage')
</script>

<template>
  <section data-component="HomeView">
    home
    <input />
    <button @click="resetPage?.()">再マウント</button>
    <button class="button">saaaa</button>
  </section>
</template>

<style lang="scss" scoped>
section[data-component="HomeView"] {

}
</style>