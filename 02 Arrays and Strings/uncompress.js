let solveCount = 1;

// Write a function, uncompress, that takes in a string as an argument.
// The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.
//You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s) => {
  let i = 0;
  let j = 0;
  let output = "";

  while (i < s.length && j < s.length) {
    let nextSeq = "";
    let num = "";

    //move j to the next letter
    while (!isNaN(s[j])) {
      j++;
    }

    //create the number behind the next letter
    while (i < j) {
      num += s[i];
      i++;
    }

    //create the next sequence of letters
    for (let k = 0; k < parseInt(num); k++) {
      nextSeq += s[j];
    }

    output += nextSeq;
    j++;
    i = j;
  }

  return output;
};

// test_00:
// uncompress("2c3a1t"); // -> 'ccaaat'
// test_01:
// uncompress("4s2b"); // -> 'ssssbb'
// test_02:
// uncompress("2p1o5p"); // -> 'ppoppppp'
// test_03:
// uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
// test_04:
// uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
