/**
 * ----------------------------------------------------
 * Programming Question : Hash Tag Generator.
 * ----------------------------------------------------
 */

//? You are required to implement a function generateHashTag a hash tag from a given input String.
//? The Hash tag should be constructed as follows:

//? The input String should be converted to a hash tag format, where each word is capitalize and concatenated
//? together without spaces.

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains
//? only whitespace the function should return false.

//? OtherWise , the function should return the generated hash tag prefixed with #.

//.............................................SOLUTION.......................................................

function generateHashTag(str) {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }
  str = str.split(" ");

  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );
  str = `#${str.join("")}`;

  return str;
}

console.log(generateHashTag("my name is aman"));
