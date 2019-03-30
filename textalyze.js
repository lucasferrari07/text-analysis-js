const fs = require('fs');

/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @returns {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  return array.reduce((map, a) => {
    if (map.has(a)) {
      map.set(a, map.get(a) + 1);
    } else {
      map.set(a, 1);
    }
    return map;
  }, new Map());
}

/**
 * Given an input Array, returns a Map with the frequency of each item in the input
 * @param {Array} array
 */
function itemFrequencyCounter(array) {
  const counts = itemCounts(array);
  const frequencies = new Map();
  counts.forEach((count, value) => {
    frequencies.set(value, count / array.length);
  });
  return frequencies;
}

/**
 * Given an input string, returns an Array of all the characters in the string
 * @param {string} text
 */
function stringToCharacters(text) {
  return text.split('');
}

/**
 * Given an input value, returns it lower-cased if it's a string
 * @param {any} text
 */
function sanitize(text) {
  if (typeof text === 'string' || text instanceof String) {
    return text.toLowerCase().replace(/[^a-zA-Z]+/g, '');
  }
  return null;
}

/**
 * Prints text frequencies histogram
 * @param {Map} frequencies
 */
function printHistogram(frequencies) {
  const maxWidth = 300;
  Array.from(frequencies.keys()).sort().forEach((letter) => {
    const freq = frequencies.get(letter);
    const freqStr = (freq * 100).toFixed(2).padStart(5, ' ');
    const bar = '='.repeat(freq * maxWidth);
    console.log(`${letter} [${freqStr}%] ${bar}`);
  });
}

if (require.main === module) {
  const path = process.argv.length >= 3 ? process.argv[2] : 'sample_data/tale-of-two-cities.txt';

  // this is @jfarmer 's approach, just leaving it here so I can remember
  // const compose2 = (f, g) => x => f(g(x));
  // const compose = (...funcs) => funcs.reduce(compose2);
  // const printCounts = counts => console.table(counts);
  // const program = compose(printCounts, itemCounts, stringToCharacters, sanitize);

  const printFileHistogram = (file) => {
    printHistogram(itemFrequencyCounter(stringToCharacters(sanitize(file))));
  };

  fs.readFile(path, (err, data) => {
    if (err) {
      console.error(`Program failed opening '${path}', please try another one.`);
    } else {
      console.log(`Character frequency for ${path} is...`);
      printFileHistogram(data.toString());
    }
  });
}

module.exports = {
  itemCounts, stringToCharacters, sanitize, itemFrequencyCounter,
};
