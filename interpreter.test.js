const { it, describe } = require('@jest/globals');
const interpreter = require('./interpreter');

const runTest = (testSuite, testMethod) => {
  testSuite.forEach((test) => {
    it(`${test.input} should return ${test.expected}`, () =>
      expect(testMethod(test.input)).toEqual(test.expected));
  });
};

describe('minute interpreter', () => {
  const testSuite = [
    { input: '0', expected: [0] },
    { input: '10,20,30', expected: [10, 20, 30] },
    { input: '3-8', expected: [3, 4, 5, 6, 7, 8] },
    {
      input: '*',
      expected: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58, 59,
      ],
    },
    { input: '*/20', expected: [0, 20, 40] },
  ];
  runTest(testSuite, interpreter.getMinute);
});

describe('Hour interpreter', () => {
  const testSuite = [
    { input: '0', expected: [0] },
    { input: '10,15,23', expected: [10, 15, 23] },
    { input: '3-8', expected: [3, 4, 5, 6, 7, 8] },
    {
      input: '*',
      expected: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23,
      ],
    },
    { input: '*/6', expected: [0, 6, 12, 18] },
  ];
  runTest(testSuite, interpreter.getHour);
});

describe('Day of month interpreter', () => {
  const testSuite = [
    { input: '1', expected: [1] },
    { input: '10,15,23', expected: [10, 15, 23] },
    { input: '3-8', expected: [3, 4, 5, 6, 7, 8] },
    {
      input: '*',
      expected: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    { input: '*/6', expected: [1, 7, 13, 19, 25, 31] },
  ];
  runTest(testSuite, interpreter.getDayOfMonth);
});

describe('Month interpreter', () => {
  const testSuite = [
    { input: '1', expected: [1] },
    { input: '10,11', expected: [10, 11] },
    { input: '3-8', expected: [3, 4, 5, 6, 7, 8] },
    {
      input: '*',
      expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    { input: '*/4', expected: [1, 5, 9] },
  ];
  runTest(testSuite, interpreter.getMonth);
});

describe('Day of week interpreter', () => {
  const testSuite = [
    { input: '1', expected: [1] },
    { input: '2,3,6', expected: [2, 3, 6] },
    { input: '3-6', expected: [3, 4, 5, 6] },
    {
      input: '*',
      expected: [1, 2, 3, 4, 5, 6, 7],
    },
    { input: '*/2', expected: [1, 3, 5, 7] },
  ];
  runTest(testSuite, interpreter.getDayOfWeek);
});
