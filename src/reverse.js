function reverseString(str) {
  // "slug"
  // 0. declare empty array
  const arr = [];
  // 1. for each ch in str, push it into array
  for (const c of str) {
    arr.push(c);
  }
  // 2. reverse the array
  const reversedArr = arr.slice().reverse();
  // 3. change array to string
  const reversedStr = reversedArr.join('');
  // 4. return reversedString
  return reversedStr;
}

module.exports = reverseString;