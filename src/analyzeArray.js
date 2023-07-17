function calculateAvg(numArr) {
  const avg = numArr.reduce(
      (accum, curr) => accum + curr,
      0) / numArr.length;
  return avg;
}

function calculateMin(nums) {
  return Math.min(...nums);
}

function calculateMax(nums) {
  return Math.max(...nums);
}

function calculateLength(nums) {
  return nums.length;
}

// input: array of numbers
// output: Object with average, min, max, length
function analyzeArray(numArr) {
  const avgVal = calculateAvg(numArr);
  const minVal = calculateMin(numArr);
  const maxVal = calculateMax(numArr);
  const lenVal = calculateLength(numArr);

  const obj = {};
  obj.average = avgVal;
  obj.min = minVal;
  obj.max = maxVal;
  obj.length = lenVal;

  return obj;
}

module.exports = analyzeArray;