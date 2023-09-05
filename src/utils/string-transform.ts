import { getUnixTime } from 'date-fns';
import { join, omit, slice, toLower, toUpper, trim, truncate, upperFirst } from 'lodash';

export const toUpperFirstCase = (phrase: string | undefined) => {
  return upperFirst(toLower(phrase));
};

export const toTitleCase = (phrase: string) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const trimAll = (str: any) => (typeof str == 'string' ? str.replace(/\s/g, '') : str);

export const getRandomStr = (name?: string) => {
  return (getUnixTime(new Date()) + new Date().getMilliseconds() + (name || '').toUpperCase()).toString();
};

export const makeRandomString = (numbLength: number = 5, textLength: number = 5) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefjhijklmnopqrstuvwxyz';
  let text = '';
  for (let i = 0; i < textLength; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
  return (join(slice((Math.random() * getUnixTime(new Date())).toFixed(0), 0, numbLength), '') + '' + toUpper(text)).toString();
};

// https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp
export const currencyOptions = {
  locale: 'es-CO',
  options: {
    currency: 'COP',
    maximumFractionDigits: 0,
  },
};

export const formatCurrency = (value: number | string = 0, styled = true) => {
  const options = styled ? { ...currencyOptions.options } : { ...omit(currencyOptions.options, ['style']) };
  const valueParsed = typeof value == 'string' ? Number(value) : value;
  return `$${valueParsed.toLocaleString(currencyOptions.locale, options)}`;
};

export const truncateWord = (str: string, lengthStr?: number, separatorStr?: string) => {
  return truncate(trim(str), {
    length: lengthStr,
    separator: separatorStr || ' ',
  });
};
