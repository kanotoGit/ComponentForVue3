import { UserInfo } from './user'

/** ログイン リクエスト */
export interface LoginRequest {
  id: string;
  password: string;
}

/** ログイン レスポンス */
export interface LoginResponse {
  token: string;
  userInfo: UserInfo;
}