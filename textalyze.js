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
    return text.toLowerCase();
  }
  return text;
}

if (require.main === module) {
  const text = 'Testing the stringToCharacters function, it should split this string into an array.';
  console.log(`Count for ${text} is...`);
  console.table(itemCounts(stringToCharacters(sanitize(text))));

  // this is @jfarmer 's approach, just leaving it here so I can remember
  // const compose2 = (f, g) => x => f(g(x));
  // const compose = (...funcs) => funcs.reduce(compose2);
  // const printCounts = counts => console.table(counts);

  // const program = compose(printCounts, itemCounts, stringToCharacters, sanitize);

  // program(text);
}

module.exports = { itemCounts, stringToCharacters, sanitize };
