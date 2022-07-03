import { CURRENCIES } from 'constants/currencies';

export const getParsedSum = (currency, sum, t) => {
  const hufCurrency = CURRENCIES[0];
  const currencyObject = CURRENCIES.find(({ id }) => id === currency) ?? {};
  const {
    id = hufCurrency.id,
    language = hufCurrency.language,
    labelKey = hufCurrency.labelKey,
  } = currencyObject;

  const value = new Intl.NumberFormat(language, {
    style: 'currency',
    currency: id,
  })
    .format(sum)
    .split(',')[0];

  return `${value} ${t.common(labelKey)}`;
};
