const {
  itemCounts, stringToCharacters, sanitize, itemFrequencyCounter,
} = require('../textalyze');

describe('itemCount', () => {
  test('returns a count of the strings in the array', () => {
    const input = ['one', 'two', 'three', 'one', 'two', 'ZZZZ'];
    const expectedOutput = new Map([['one', 2], ['two', 2], ['three', 1], ['ZZZZ', 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('returns an empty hash when array is empty', () => {
    const input = [];
    const expectedOutput = new Map();

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('counts multiple words', () => {
    const input = ['hi', 'hi', 'hi'];
    const expectedOutput = new Map([['hi', 3]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('handles non-string inputs', () => {
    const input = ['null', null, '10', 10];
    const expectedOutput = new Map([['null', 1], [null, 1], ['10', 1], [10, 1]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });

  test('is case-sensitive', () => {
    const input = ['a', 'A', 'a', 'A'];
    const expectedOutput = new Map([['a', 2], ['A', 2]]);

    expect(itemCounts(input)).toEqual(expectedOutput);
  });
});

describe('stringToCharacters', () => {
  test('returns an Array of characters contained in a string', () => {
    const input = 'Proxi rules!';
    const expectedOutput = ['P', 'r', 'o', 'x', 'i', ' ', 'r', 'u', 'l', 'e', 's', '!'];
    expect(stringToCharacters(input)).toEqual(expectedOutput);
  });
});

describe('sanitize', () => {
  test('returns a string lower-cased', () => {
    const input = 'Proxi Rules!';
    const expectedOutput = 'proxirules';
    expect(sanitize(input)).toEqual(expectedOutput);
  });

});

describe('itemFrequency', () => {
  test('returns a Map with an array item frequencies', () => {
    const input = ['one', 'two', 'three', 'one', 'two', 'ZZZZ'];
    const expectedOutput = new Map([['one', 2 / 6], ['two', 2 / 6], ['three', 1 / 6], ['ZZZZ', 1 / 6]]);
    expect(itemFrequencyCounter(input)).toEqual(expectedOutput);
  });
});
