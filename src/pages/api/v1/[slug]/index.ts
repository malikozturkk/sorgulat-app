import type { NextApiRequest, NextApiResponse } from 'next'
import { getMarketIndices, getEytBankPromotion, getBecomeCustomer } from 'services/finance'

interface ApiConfig {
  method: 'POST' | 'GET'
  service: (...args: any[]) => Promise<any>
}

const API_MAPS: Record<string, ApiConfig> = {
  'market-indices': { service: getMarketIndices, method: 'GET' },
  'eyt-bank-promotion': { service: getEytBankPromotion, method: 'GET' },
  'become-customer': { service: getBecomeCustomer, method: 'GET' },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ...params } = req.method === 'POST' ? req.body : req.query
  const { slug } = req.query

  try {
    const apiConfig = API_MAPS[slug as string]

    if (!slug || !apiConfig || !apiConfig.method || req.method !== apiConfig.method) {
      throw new Error('Invalid API endpoint')
    }
    const result = await apiConfig.service(params)

    res.status(200).json(result)
  } catch (e) {
    console.log('Error on API ->', e)
    res.status(200).json(e)
  }
}