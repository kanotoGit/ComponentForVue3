export interface AlertInfo {
  id: Symbol; // ID
  open: boolean; // 開閉状態
  text: string; // 表示テキスト
  alertType: AlertType; // アラートの種類
  clickFunction: (isOk: boolean) => void; // ボタン押下時の処理
  closeFunction: (id: Symbol) => void; // アラートが閉じた際の処理
}

/** アラートの種類 */
export type AlertType = 'confirm' | 'notice' | 'error'