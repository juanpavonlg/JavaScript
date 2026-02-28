function sevenAte9(str) {
  // let ans = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (!(str[i] === "9" && str[i - 1] === "7" && str[i + 1] === "7")) {
  //     ans += str[i];
  //   }
  // }
  // return ans;
  return str.replace(/79(?=7)/g, "7")
} // sevenAte9()

console.log(sevenAte9("79712312"));
console.log(sevenAte9("79797"));
