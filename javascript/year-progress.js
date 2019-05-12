const isLeapYear = year => {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 && year % 3200 !== 0)
  ) {
    return true;
  }

  return false;
};

const getDaysCountOfYear = year => {
  return isLeapYear(year) ? 366 : 365;
};

/**
 *
 * @param {Date} date
 */
const getDaysOfYear = now => {
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);

  return day;
};

const getProgressYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  const day = getDaysOfYear(date);

  return `${(day / getDaysCountOfYear(year)).toFixed(2) * 100}%`;
};

console.log(getProgressYear());
