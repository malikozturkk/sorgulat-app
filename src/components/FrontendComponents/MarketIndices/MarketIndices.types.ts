export interface IMarketIndices {
    BTC: IMarketIndicesData[]
    C: IMarketIndicesData[]
    ETH: IMarketIndicesData[]
    EUR: IMarketIndicesData[]
    GA: IMarketIndicesData[]
    GAG: IMarketIndicesData[]
    GBP: IMarketIndicesData[]
    USD: IMarketIndicesData[]
    XU100: IMarketIndicesData[]
}


export interface IMarketIndicesData {
    alis: string
    d_oran: string
    d_yon: string
    degisim: string
    satis: string
}