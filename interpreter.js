const getMinute = (minute) => {
  return interprete(minute, 0, 59);
};

const getHour = (hour) => {
  return interprete(hour, 0, 23);
};

const getDayOfMonth = (dom) => {
  return interprete(dom, 1, 31);
};

const getMonth = (month) => {
  return interprete(month, 1, 12);
};

const getDayOfWeek = (dow) => {
  return interprete(dow, 1, 7);
};

const interprete = (inputStr, min, max) => {
  const operation = getOperation(inputStr);
  switch (operation) {
    case ',':
      return getValueList(inputStr);
    case '-':
      const [lowerBound, upperBound] = getNumberFromStr(inputStr);
      return getValueRange(parseInt(lowerBound), parseInt(upperBound), 1);
    case '/':
    case '*/':
      const [skipRange] = getNumberFromStr(inputStr);
      return getValueRange(min, max, parseInt(skipRange));
    case '*':
      return getValueRange(min, max, 1);
    default:
      return [parseInt(inputStr)];
  }
};

const getNumberFromStr = (inputStr) => inputStr.match(/\d+/g);

const getOperation = (inputStr) => {
  operationRegex = /,|-|\*\/|\/|\*/;
  const operation = inputStr.match(operationRegex);
  if (!operation) return null;
  return operation[0];
};

const getValueList = (inputStr) => {
  return inputStr.split(',').map((n) => parseInt(n));
};

const getValueRange = (min, max, skipRange) => {
  let values = [];
  while (min <= max) {
    values.push(min);
    min = min + skipRange;
  }
  return values;
};

module.exports = {
  getMinute,
  getHour,
  getDayOfMonth,
  getMonth,
  getDayOfWeek,
};
