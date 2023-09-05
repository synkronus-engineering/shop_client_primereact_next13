import { add, format, formatDuration, fromUnixTime, getUnixTime, sub } from 'date-fns';

export const FormatDateHumanize = (date: any, formatType: string) => {
  return formatDuration({ months: 9, days: 2 });
};

export const FormatDateTMZ = (date: any, formatType: string) => {
  return format(date ? new Date(date) : new Date(), formatType);
};

export const dtOperations = (date: any, duration: any, operation: string) => {
  switch (operation) {
    case 'sub':
      return sub(date || new Date(date), { ...duration });

    case 'add':
      return add(date || new Date(date), { ...duration });
    default:
      return date;
  }
};

export const unitToConvertFormat = (time: any, operation: string) => {
  switch (operation) {
    case 'convert':
      return fromUnixTime(time);
    case 'get':
      return getUnixTime(time);
    default:
      return time;
  }
};

export const getMinMaxDatesCalendar = (numMonthsToAdd: number = 1, numYearsToAdd: number = 1, subsTractYears = false) => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const prevMonth = month === 0 ? 11 : month - numMonthsToAdd;
  const prevYear = year - numYearsToAdd;
  // const prevYear = prevMonth === 11 ? year - numYearsToAdd : year;
  let nextMonth = month === 11 ? 0 : month + numMonthsToAdd;
  // let nextYear = nextMonth === 0 ? year + numYearsToAdd : year;
  const minDate = new Date();
  minDate.setMonth(prevMonth);
  minDate.setFullYear(prevYear);
  const maxDate = new Date();
  maxDate.setMonth(nextMonth);
  maxDate.setFullYear(year);
  return { minDate, maxDate };
};

export const getLocaleEsCalendar = () => {
  return {
    firstDayOfWeek: 1,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar',
  };
};
