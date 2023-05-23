import { type RoleName } from '@/types/api'
import { type AlertType } from '@/types/alert'

/** 権限ロール */
export class ROLE_NAME {
  static readonly ADMIN: RoleName = 'ADMIN'
  static readonly MANAGER: RoleName = 'MANAGER'
  static readonly LEADER: RoleName = 'LEADER'
  static readonly GENERAL: RoleName = 'GENERAL'
}

/** アラートの種類 */
export class ALERT_TYPE {
  static readonly CONFIRM: AlertType = 'confirm'
  static readonly NOTICE: AlertType = 'notice'
  static readonly ERROR: AlertType = 'error'
}
