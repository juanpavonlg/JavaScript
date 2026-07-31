//@ts-check

/**
 * @typedef {Object} Tree
 * @property {number} value
 * @property {Tree | null} left
 * @property {Tree | null} right
 */

/**
 * @param {Tree | null} root
 * @returns {number}
 */
function sumTheTreeValues(root) {
  return root
    ? root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
    : 0;
} // sumTheTreeValues()

const node = {
  value: 1,
  left: { value: 2, right: null, left: null },
  right: null,
};
console.log(sumTheTreeValues(node));
