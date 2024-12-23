/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // Initialise pointers
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    // Swap values using array destructuring
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }

  console.log(s);
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
