/**
 * Given an input Array, returns a Map containing the count of each item in the input.
 * @param {Array} array - The array of items to count
 * @param {Map} counts - A Map containing the counts of the items in the input array
 */
function itemCounts(array) {
  let counts = new Map();

  for (const a of array) {
    counts.has(a) ? counts.set(a, counts.get(a) + 1) : counts.set(a, 1);
  }

  return counts;
}

const elements = ["a", "a", "a", "b", "b", "c"];
console.log(`Count for [${elements}] is...`);
itemCounts(elements).forEach((count, elem) => {
  console.log(elem, count);
});

module.exports = { itemCounts };
