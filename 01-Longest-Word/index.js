// * -------------------------------------------------

// * Programming Question :- Longest Word in a String

// * -------------------------------------------------

/** Q :- write a function findLongestWord that takes a string as input and return the longest word in the string.
 *       If there are multiples longest words, return first one encountered.  */

//* Constrains:-
//? The input String may contain alphabetic characters, digits, spaces and punctuation.
//? The input string is non-empty.
//? The input string may contain multiple words separated by spaces.

//* Note:--
//? If the Input string is empty on contains only whitespace, the function should return false.
//? the function should ignore leading and trailing whitespace when determining the longest word.

//* Solution :-

function findLongestWord(str) {
  str = str.trim();

  if (str.length === 0) {
    return false;
  }

  let words = str.split(" ");

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

let str = "watch my latest post on Instagram";

let res = findLongestWord(str);

// console.log(res);

// 6200062893
// 7481069563

// Another Way to do using sort method:-

function findLongesT(string) {
  string = string.trim();
  if (string.length === 0) {
    return false;
  }
  let words = string.split(" ");
  console.log(words);

  words.sort((a, b) => b.length - a.length);
  console.log(words);
  return words[0];
}

let string =
  "breakup hurts when the reason is nothing and you are suffering a lot";

let result = findLongesT(string);

console.log(result);
