const { it, describe } = require('@jest/globals');
const validator = require('./validator');

const runTest = (testSuite, testMethod) => {
  testSuite.forEach((test) => {
    it(`${test.input} should return ${test.expected}`, () =>
      expect(testMethod(test.input)).toBe(test.expected));
  });
};

describe('minute validator', () => {
  const testSuite = [
    { input: '0', expected: true },
    { input: '60', expected: false },
    { input: '10,20,30', expected: true },
    { input: '10,20,70', expected: false },
    { input: '10-20', expected: true },
    { input: '10-70', expected: false },
    { input: '*', expected: true },
    { input: '*/20', expected: true },
    { input: '*/70', expected: false },
    { input: 'abc', expected: false },
  ];
  runTest(testSuite, validator.isValidMinute);
});

describe('hour validator', () => {
  const testSuite = [
    { input: '0', expected: true },
    { input: '24', expected: false },
    { input: '1,2,3', expected: true },
    { input: '1,2,24', expected: false },
    { input: '1-5', expected: true },
    { input: '1-24', expected: false },
    { input: '*', expected: true },
    { input: '*/20', expected: true },
    { input: '*/24', expected: false },
    { input: 'abc', expected: false },
  ];
  runTest(testSuite, validator.isValidHour);
});

describe('Day of month validator', () => {
  const testSuite = [
    { input: '0', expected: false },
    { input: '32', expected: false },
    { input: '20', expected: true },
    { input: '1,2,30', expected: true },
    { input: '1,32', expected: false },
    { input: '1-31', expected: true },
    { input: '1-32', expected: false },
    { input: '*', expected: true },
    { input: '*/20', expected: true },
    { input: '*/32', expected: false },
    { input: 'abc', expected: false },
  ];
  runTest(testSuite, validator.isValidDayOfMonth);
});

describe('Month validator', () => {
  const testSuite = [
    { input: '0', expected: false },
    { input: '13', expected: false },
    { input: '12', expected: true },
    { input: '1,2,12', expected: true },
    { input: '1,13', expected: false },
    { input: '1-12', expected: true },
    { input: '1-13', expected: false },
    { input: '*', expected: true },
    { input: '*/20', expected: false },
    { input: '*/2', expected: true },
    { input: 'abc', expected: false },
  ];
  runTest(testSuite, validator.isValidMonth);
});

describe('Day of week validator', () => {
  const testSuite = [
    { input: '1', expected: true },
    { input: '7', expected: true },
    { input: '8', expected: false },
    { input: '1,2,3', expected: true },
    { input: '1,8', expected: false },
    { input: '1-6', expected: true },
    { input: '1-8', expected: false },
    { input: '*', expected: true },
    { input: '*/8', expected: false },
    { input: '*/2', expected: true },
    { input: 'abc', expected: false },
  ];
  runTest(testSuite, validator.isValidDayOfWeek);
});
