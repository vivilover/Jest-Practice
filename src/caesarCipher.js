function caesarArray(strArr, shiftBy) {
  const shiftedArr = [];
  const index = 0; // default value for .charCodeAt()
  // for each character in strArr, check if lowercase or UPPERCASE char
  for (const ch of strArr) {
    // convert char to corresponding ascci number
    const charAsciiVal = ch.charCodeAt(0);
    // check ch.charCodeAt(0) in range
    if (charAsciiVal >= 65 && charAsciiVal <= 90) { // a) UPPERCASE
      // goal: push shiftedArr
      // if charAsciiVal + shiftBy out of range, subtract 26
      // and PUSH
      // String.fromCharCode(number)
      if (charAsciiVal + shiftBy > 90) {
        shiftedArr.push(String.fromCharCode((charAsciiVal + shiftBy) - 26));
      } else { //  otherwise PUSH as it is
        shiftedArr.push(String.fromCharCode((charAsciiVal + shiftBy)));
      }
    } else if (charAsciiVal >= 97 && charAsciiVal <= 122) { // b) lowercase
      if (charAsciiVal + shiftBy > 122) {
        shiftedArr.push(String.fromCharCode((charAsciiVal + shiftBy) - 26));
      } else { //  otherwise PUSH as it is
        shiftedArr.push(String.fromCharCode((charAsciiVal + shiftBy)));
      }
    } else { // not alphabet, PUSH char as it is
      shiftedArr.push(String.fromCharCode(charAsciiVal));
    }
  }
  return shiftedArr;
}

// input: str(string to be shifted), shift: number of chars to shift
function caesarCipher(str, shiftBy) {
  // uppercase: 65 to 90
  // lowercase: 97 to 122
  // 1. string to array
  const strArr = [];
  for (const ch of str) {
    strArr.push(ch);
  }
  // 2. shift each char in the array
  const shiftedArr = caesarArray(strArr, shiftBy);
  // 3. array back to string
  const shiftedStr = shiftedArr.join('');
  // return string
  return shiftedStr;
}

module.exports = caesarCipher;