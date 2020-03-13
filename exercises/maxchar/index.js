// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let maxC = "";
  let counter = 0;

  //roll through the characters in string; Add character to charMap unless it has already been added. If it has already been added, increment value ++.
  for (let char of str) {
    !charMap[char] ? (charMap[char] = 1) : charMap[char]++;
  }

  //roll through key:value pairs in charMap to determine which character has the highest value. Char represents the key values.
  for (let char in charMap) {
    console.log(charMap[char]);
    if (charMap[char] > counter) {
      maxC = char;
      counter += char;
    }
  }
  return maxC;
}

module.exports = maxChar;
