// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let sA = stringA.replace(/[^\w]/g, "").toLowerCase();
  let sB = stringB.replace(/[^\w]/g, "").toLowerCase();
  //   // Create two empty objects (one for each string).
  //   let sA = {};
  //   let sB = {};
  //   // Create a char map object for both strings.
  //   const charMap = (string, ob) => {
  //     for (let char of string) {
  //       !ob[char] ? (ob[char] = 1) : ob[char]++;
  //     }
  //   };
  //   charMap(stringA, sA);
  //   charMap(stringB, sB);

  //   // Check if values for each character in the two strings are equal.
  //   for (let char of stringB) {
  //     sB[char] === sA[char] ? (counter = 0) : (counter += 1);
  //   }
  //   return counter > 0 ? false : true;
  console.log(sA.split("").sort());
  return (
    sA
      .split("")
      .sort()
      .join("") ===
    sB
      .split("")
      .sort()
      .join("")
  );
}

module.exports = anagrams;
