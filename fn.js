//함수 익수해지기

const price = 10000 // 소비자가격
const priceKrw = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(price) + "원"
let tax = price / 11 * 10
tax = Math.round(tax)
tax = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(tax)
tax = tax + "원"
let originalPrice = price / 11
originalPrice =  Math.round(originalPrice)
originalPrice = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(originalPrice)
originalPrice = originalPrice + "원"