<script lang="ts" setup>
import { ref, nextTick, type DefineComponent, type PropType, provide } from 'vue'

const props = defineProps({
  /** 表示するページ */
  view: {
    type: Object as PropType<DefineComponent>,
    required: true,
  }
})

/** ページリセット用 */
const isShowSlot = ref<boolean>(true)

/**
 * ページ全体を再マウントする
 */
async function resetPage() {
  isShowSlot.value = false
  await nextTick()
  isShowSlot.value = true
}

provide('resetPage', resetPage)
</script>

<template>
  <main>
    default
    <template v-if="isShowSlot">
      <component :is="props.view" />
    </template>
  </main>
</template>

<style lang="scss" scoped></style>