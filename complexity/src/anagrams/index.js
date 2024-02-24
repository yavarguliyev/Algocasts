// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
  Building character maps (aCharMap and bCharMap) takes O(n) time, where n is the length of the input strings.
  Comparing the character maps takes O(m), where m is the number of unique characters in the strings.
  The overall time complexity is O(n + m).

  Big O(n + m) => Complexity
*/

// function anagrams (stringA, stringB) { 
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (const char in aCharMap) { 
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap (str) {
//   const charMap = {};

//   for (const char of str.replace(/[^\w]/g).toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap
// }

/*
  Cleaning the strings involves replacing characters, converting to lowercase, splitting, sorting, and joining, each taking O(n * log(n)) time complexity.

  Big O(n * log(n)) => Complexity
*/

// function anagrams (stringA, stringB) { 
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString (str) {
//   return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
// }

/*
  In terms of time complexity, Option 1 might be more efficient for smaller inputs or cases where the number of unique characters is relatively small. However, for larger inputs, Option 2's time complexity of O(n * log(n)) could become a significant factor.

  Option 2 has a simpler implementation, but its time complexity depends on the sorting step. If performance is critical, you might want to consider other approaches, such as using frequency arrays instead of sorting.

  In general, for simplicity and readability, Option 2 might be preferred unless performance becomes a significant concern for large inputs. If performance is a priority, you could also explore alternative algorithms to determine anagrams.
*/

/*
  In this implementation, we use two arrays (charFrequencyA and charFrequencyB) to track the frequency of each character in the input strings. We iterate through the strings, updating the respective frequency arrays. Finally, we compare the frequency arrays. If they are the same, the strings are anagrams.

  Big O(n) => Complexity
*/

function anagrams (stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }

  const charFrequencyA = new Array(26).fill(0);
  const charFrequencyB = new Array(26).fill(0);

  for (let i = 0; i < stringA.length; i++) {
    const indexA = stringA.charCodeAt(i) - 'a'.charCodeAt(0);
    const indexB = stringB.charCodeAt(i) - 'a'.charCodeAt(0);

    charFrequencyA[indexA]++;
    charFrequencyB[indexB]++;
  }

  for (let i = 0; i < 26; i++) {
    if (charFrequencyA[i] !== charFrequencyB[i]) {
      return false;
    }
  }

  return true;
}

/*
  The code const charFrequencyA = new Array(26).fill(0); is creating an array of length 26, which is intended to represent the English alphabet's 26 lowercase letters from 'a' to 'z'. This array will be used to store the frequency of each character in the input string.

  The reason for using an array of length 26 is to map each letter of the alphabet to a specific index in the array. For example, 'a' would correspond to index 0, 'b' to index 1, and so on. This mapping is achieved by subtracting the ASCII code of 'a' from the ASCII code of the current character.

  By using an array of fixed length, the algorithm avoids the need for a dynamic data structure like an object or hash table. This can lead to better performance and simplicity in tracking the frequency of each character.

  In summary, the array of length 26 is chosen to efficiently represent the frequency of lowercase letters in the English alphabet while keeping the algorithm's time complexity linear (O(n)).
*/

module.exports = anagrams;
