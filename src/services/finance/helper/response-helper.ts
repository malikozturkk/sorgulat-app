import { AxiosResponse, AxiosError } from 'axios'

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}
export async function FinanceGlobalResponseHandler<T>(response: AxiosResponse) {
  const { result, resultType } = response.data

  if (resultType !== 'Error') {
    return result || response.data
  }
  return response.data
}

export function FinanceGlobalErrorHandler<T>(responseError: AxiosError) {
  let err = null

  if (responseError.response && responseError.response.data) {
    const { data } = responseError.response

    if (data) {
      err = data
    }

    throw err
  }

  err = 'Sunucuya erişilemedi.'
  throw err
}
