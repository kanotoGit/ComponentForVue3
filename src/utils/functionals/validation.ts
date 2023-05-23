/**
 * 数値チェック
 * @param {string | null} value チェックする値
 */
export const isNumber = (value: string | null): boolean => {
  if (value) {
    return /^[+-]?\d+(\.\d+)?$/.test(value)
  }
  return false
}
