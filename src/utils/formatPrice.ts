export function formatPrice(amount, currency, location: 'right' | 'left') {
    const price = parseFloat(amount).toLocaleString("tr-TR")
    let formattedPrice: string
    location === 'right' ? formattedPrice = price + currency : formattedPrice = currency +  price
    return formattedPrice
}