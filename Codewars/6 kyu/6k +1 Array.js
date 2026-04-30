//@ts-check

/**
 * @param {number[]} arr
 * @returns {number[]|null}
 */
function upArray(arr) {
  if (arr.length === 0 || arr.some((e) => e < 0 || e > 9)) {
    return null;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i] += 1;
      break;
    } else {
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
      }
    }
  }
  return arr;
} // upArray()

console.log(upArray([4, 3, 2, 5]));
console.log(upArray([1, 2, 3, 9]));
console.log(upArray([9, 9, 9, 9]));
console.log(upArray([0, 1, 3, 7]));
