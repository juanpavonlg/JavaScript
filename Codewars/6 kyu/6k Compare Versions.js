//@ts-check

/**
 * @param {string} version1
 * @param {string} version2
 * @returns {boolean}
 */
function compareVersions(version1, version2) {
  const ver1 = version1.split(".").map(Number);
  const ver2 = version2.split(".").map(Number);
  const len = Math.max(ver1.length, ver2.length);
  for (let i = 0; i < len; i++) {
    const [n1, n2] = [ver1[i] ?? 0, ver2[i] ?? 0];
    if (n1 > n2) {
      return true;
    } else if (n1 < n2) {
      return false;
    }
  }
  return true;
} // compareVersions()

console.log(compareVersions("11", "10"));
console.log(compareVersions("11", "11"));
console.log(compareVersions("10.4.6", "10.4"));
console.log(compareVersions("10.4", "11"));
console.log(compareVersions("10.4", "10.10"));
console.log(compareVersions("10.4.9", "10.5"));
