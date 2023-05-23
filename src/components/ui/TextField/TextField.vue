<script lang="ts" setup>
import { ref, toRefs, useAttrs, computed, nextTick, type PropType } from 'vue'
import { isNumber } from '@/utils/index';

interface ValidateResult {
  isOk: boolean; // バリデーション結果
  validatedValue: string | number | null; // バリデーション後の値
}

/** $attrs */
const $attrs = useAttrs()

/** 入力値リセット用 */
const isShowInput = ref<boolean>(true)
/** input要素 */
const input = ref<HTMLInputElement | null>(null)

/** props */
const props = defineProps({
  /* 入力値 */
  text: {
    type: [String, Number] as PropType<string | number | null>,
    default: null,
  },
  /* 入力タイプ */
  type: {
    type: String,
    default: 'text',
  },
  /** 非アクティブ判定 */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** 最小数値 */
  minNumber: {
    type: Number,
    default: Number.MIN_SAFE_INTEGER
  },
  /** 最大数値 */
  maxNumber: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },

  // 入力値のエラー判定
  // isError: {
  //   type: Boolean,
  //   default: false,
  // },
})
const { text, type, disabled, minNumber, maxNumber } = toRefs(props)

/** inputタグのtype */
const typeValue = computed(() => {
  if (type.value === 'number') {
    return 'text'
  }
  return type.value
})

/** 入力フォームに表示するテキスト */
const displayText = computed(() => {

})

/** emit */
const emit = defineEmits<{
  (event: 'update:text', value: string | number | null): void
  (event: 'input', value: string | number | null, e: Event): void
  (event: 'change', value: string | number | null, e: Event): void
}>()

/** 入力イベント */
async function onInput(event: Event) {
  if (!disabled.value) {
    const target = event.target as HTMLInputElement
    const { value } = target
    let reflectValue: string | number | null = value || null;

    // 数値のバリデーションチェック
    if (type.value === 'number') {
      const validateResult = validateNumber(value)
      reflectValue = validateResult.validatedValue

      // 想定しない文字が入力された場合、実際の入力値をリセット
      if (!validateResult.isOk) {
        await resetInput()
        // $dialog.error('数値を入力してください')
      }
    } else {
      // 数値入力でなければ、そのまま反映
      reflectValue = value
    }
    emit('update:text', reflectValue)
    emit('input', reflectValue, event)
  }
}

/** 変更イベント */
function onChange(event: Event) {
  if (!disabled.value) {
    const target = event.target as HTMLInputElement
    const { value } = target
    let reflectValue: string | number | null = value || null;

    // 数値入力の場合、number型に変換
    if (type.value === 'number') {
      // NOTE: バリデーションはinputイベントで実施
      reflectValue = Number(value)
    }
    emit('change', reflectValue, event)
  }
}

/**
 * 入力値のリセット
 */
async function resetInput() {
  // if (input.value?.value != null) {
  //   input.value.value = String(text.value ?? '')
  // }

  isShowInput.value = false
  await nextTick()
  isShowInput.value = true

  await nextTick()
  input.value?.focus?.()
}

/**
 * 数値のバリデーションチェック
 * @param {string} value バリデーション対象の値
 */
function validateNumber(value: string): ValidateResult {
  const result: ValidateResult = { isOk: true, validatedValue: value }

  // 数値入力できない想定の文字を削除した文字列
  const formatValue = value
    .replace(/[^0-9.-]/g, '') // [数値.-]以外を削除
    .replace(/(?<!^)-/g, '') // [先頭のハイフン]以外を削除
    .replace(/\.(?=.*\.)/g, '') // 2つ目以降のピリオド削除

  // バリデーション後の値の決定
  if (!formatValue || formatValue === '-') {
    // 空文字 or `-`の場合は変数に反映しない
    result.validatedValue = null
  } else if (isNumber(formatValue)) {
    // 数値の場合、範囲チェック
    const number = Number(formatValue)
    if (minNumber.value <= number && number <= maxNumber.value) {
      // 範囲内
      result.validatedValue = number
    } else {
      // 範囲外
      result.validatedValue = text.value
    }
  } else {
    // 数値以外の場合、元に戻す
    result.validatedValue = text.value
  }

  // 数値入力できない想定の文字が入力されている場合、不正判定
  if (value !== '-' && result.validatedValue != value) {
    result.isOk = false
  }

  return result
}
</script>

<template>
  <div data-component="TextField">
    <input
      ref="input"
      v-if="isShowInput"
      :type="typeValue"
      :value="text"
      :disabled="disabled"
      v-bind="$attrs"
      @input="onInput"
      @change="onChange"
    >
  </div>
</template>

<style lang="scss" scoped>
[data-component="TextField"] {
  width: 100%;
  display: inline-block;
}
input {
  width: 100%;
  min-height: var(--form-item-height);
}
</style>