import accounting from 'accounting'
import { format } from 'date-fns'
import { currencies, detectedCulture, dataLocalFormat } from '@/utilities/common/culture'
import _ from 'lodash'
import store from 'store'

export const formatCurrency = function (price, showZero = false, showSupFormat = false) {
  if (!showZero && price === 0) {
    return price
  }
  // default currency formate
  // use ',' as Decimal , '.' as Thousands seperate
  let currencySymbolPosition = store.state.culture.currencySymbolPosition
  let currency = _.find(currencies, { code: detectedCulture.currencyCode })
  let symbol = currency && currency.symbol
  let decimal = currency && currency.decimal
  let thousand = currency && currency.thousand
  if (currencySymbolPosition === 'after') {
    accounting.settings.currency.format = '%v %s'
  } else {
    accounting.settings.currency.format = '%s%v'
  }
  let formatPrice = accounting.formatMoney(accounting.toFixed(price, 2), symbol, 2, thousand, decimal)
  if (showSupFormat) {
    let formatPriceArray = formatPrice.split(decimal)
    if (currencySymbolPosition === 'after') {
      formatPrice = formatPriceArray[0] + decimal + `<sup>${formatPriceArray[1].substring(0, formatPriceArray[1].length - 2)}</sup>` + formatPriceArray[1].substring(formatPriceArray[1].length - 2)
    } else {
      formatPrice = formatPriceArray[0] + decimal + `<sup>${formatPriceArray[1]}</sup>`
    }
  }
  return formatPrice
}

export const formatLocalDate = (date, dataFormat = dataLocalFormat) =>
  date && format(new Date(date), dataFormat)
