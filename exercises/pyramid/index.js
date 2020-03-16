// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// n = rows
// i = row
// t = hashes = (i*2 - 1)
// n - t = spaces = (n - (i - .5))

function pyramid(n) {
  for (i = 1; i <= n; i++) {
    console.log(
      " ".repeat(n - (i - 0.5)) +
        "#".repeat(i * 2 - 1) +
        " ".repeat(n - (i - 0.5))
    );
  }
}

module.exports = pyramid;
