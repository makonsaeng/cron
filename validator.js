const isValidMinute = (minute) => {
  return validate(minute, 0, 59);
};

const isValidHour = (hour) => {
  return validate(hour, 0, 23);
};

const isValidDayOfMonth = (dom) => {
  return validate(dom, 1, 31);
};

const isValidMonth = (month) => {
  return validate(month, 1, 12);
};

const isValidDayOfWeek = (dow) => {
  return validate(dow, 1, 7);
};

const isValidInput = (minute, hour, dom, month, dow) => {
  return (
    isValidMinute(minute) &&
    isValidHour(hour) &&
    isValidDayOfMonth(dom) &&
    isValidDayOfWeek(dow) &&
    isValidMonth(month)
  );
};

const validate = (input, min, max) => {
  const validFormatRegex = /(\d+,)+\d+|(\d+(\/|-)\d+)|\d+|\*/;

  if (input === '*') return true;
  if (!input.match(validFormatRegex)) return false;

  const numbers = input.match(/\d+/g);
  if (!numbers) return false;

  return numbers.every((n) => n >= min && n <= max);
};

module.exports = {
  isValidInput,
  isValidMinute,
  isValidHour,
  isValidDayOfMonth,
  isValidMonth,
  isValidDayOfWeek,
};
