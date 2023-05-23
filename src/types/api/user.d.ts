/** ユーザ情報 */
export interface UserInfo {
  id: string;
  name: string;
  userRole: UserRole;
}

/** ユーザロール */
export interface UserRole {
  id: string;
  name: RoleName;
  description: string;
}

/** 役職 */
export type RoleName = 'ADMIN' | 'MANAGER' | 'LEADER' | 'GENERAL';