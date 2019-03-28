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

if (require.main === module) {
  const elements = ['a', 'a', 'a', 'b', 'b', 'c'];
  console.log(`Count for [${elements}] is...`);
  console.table(itemCounts(elements));

  const text = 'Testing the stringToCharacters function, it should split this string into an array.';
  console.log(`Count for ${text} is...`);
  console.table(itemCounts(stringToCharacters(text)));
}

module.exports = { itemCounts, stringToCharacters };
