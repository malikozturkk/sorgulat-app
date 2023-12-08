import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { ApiConfig, ApiInstance, AuthCatcher } from './types'

const defaultConfig: ApiConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json' as const,
  timeout: 10 * 1000,
}

const defaultAuthCatcher: AuthCatcher = async (req): Promise<any> => {
  return new Promise((resolve) => {
    return resolve(req)
  })
}

export function CreateAPI<T = AxiosResponse>(config?: ApiConfig): ApiInstance {
  // @ts-ignore
  const instance: ApiInstance = Axios.create({
    adapter: Axios.defaults.adapter,
    ...defaultConfig,
    ...config,
  })

  instance.authCatcher = async (req) => (config?.defaultAuthCatcher ? config?.defaultAuthCatcher(req) : defaultAuthCatcher(req))

  const GlobalAuthCatcher = async (request: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    const req = request
    if (instance.authCatcher) {
      await instance.authCatcher(req)
    }
    return req
  }
  
  instance.setAuthCatcher = async (fn: AuthCatcher) => {
    return new Promise((resolve, reject) => {
      try {
        instance.authCatcher = fn
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  //@ts-ignore
  instance.interceptors.request.use((req): AxiosRequestConfig | Promise<AxiosRequestConfig> => GlobalAuthCatcher(req))

  return instance
}
