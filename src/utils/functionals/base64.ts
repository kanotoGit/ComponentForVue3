/**
 * 文字列をbase64に変換する
 * @param {string} data base64に変換するデータ
 */
export const stringToBase64 = (data: string) => {
  return window.btoa(encodeURIComponent(data))
}

/**
 * 文字列をbase64に変換する
 * @param {string} base64 base64
 */
export const base64ToString = (data: string) => {
  return decodeURIComponent(window.atob(data))
}
