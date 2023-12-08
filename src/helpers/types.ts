import { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface ApiConfig extends AxiosRequestConfig {
  defaultAuthCatcher?: AuthCatcher
}

export type AuthCatcher = (req: AxiosRequestConfig) => Promise<AxiosRequestConfig>

export interface ApiInstance extends AxiosInstance {
  authCatcher?: AuthCatcher
  setAuthCatcher: (fn: AuthCatcher) => Promise<boolean | unknown>
}
