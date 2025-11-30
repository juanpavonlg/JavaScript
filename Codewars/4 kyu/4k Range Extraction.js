function solution(list) {
  let ans = [];
  for (let i = 0; i < list.length; i++) {
    let span = 1;
    let j = i + 1;
    for (; j < list.length; j++) {
      if (list[j] === list[j - 1] + 1) {
        span++;
      } else {
        break;
      }
    }
    if (span >= 3) {
      ans.push(`${list[i]}-${list[j - 1]}`);
      i = j - 1;
    } else {
      ans.push(`${list[i]}`);
    }
  }
  return ans.join();
} // solution()

console.log(
  solution([
    -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18,
    19, 20,
  ])
);
