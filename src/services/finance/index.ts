import { CreateAPI } from '../../helpers/CreateAPI'
import { IMarketIndices } from 'components/FrontendComponents/MarketIndices/MarketIndices.types'
import { FinanceGlobalErrorHandler, FinanceGlobalResponseHandler } from './helper/response-helper'
import { bankPromotionData, becomeCustomerData } from './statik-data'

export function FinanceCoreAPI<T>() {
  const api = CreateAPI()
  api.interceptors.response.use(FinanceGlobalResponseHandler, FinanceGlobalErrorHandler)
  return api
}

export const API = FinanceCoreAPI()

export const getMarketIndices = async () => {
  return await API.get<IMarketIndices>('https://api.genelpara.com/embed/altin.json')
}

export const getEytBankPromotion = async () => {
  return bankPromotionData
}

export const getBecomeCustomer = async () => {
  return becomeCustomerData
}

export const SelectOldFlights = async (params) => {
  const { tickets, segments } = params
  return await API.post(`/flights/select/old`, { tickets, segments })
}