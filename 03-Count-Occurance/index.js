/**
 * ----------------------------------------------------
 * Programming Question : Count Occurance of Characters.
 * ----------------------------------------------------
 */

//! Task :-

//? Write a function called countChar that takes two parameter : a string and a character to count.
//? The function should return the number of times the specified characters appears in the string.

function countChar(str, k) {
  let obj = {};
  str = str.toLowerCase();
  k = k.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  return obj[k];
}

// console.log(countChar("MissIssippi", "I"));

// Todo Constraints :-

//? The function should be case sensitive.
//? The function should handle the both uppercase and lowercase characters.
//? The character parameter can be any printable ASCII character
//? (the function should accept any character that is part of the ASCII Character set and is Printable.)

//..............................................using Reduce method............................................

function OccuranceCount(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();

  let words = str.split("");

  let totalWords = words.reduce((acc, cur) => {
    if (cur === char) {
      acc++;
    }
    return acc;
  }, 0);
  return totalWords;
}
console.log(OccuranceCount("manhhdjekssddroaa", "A"));
