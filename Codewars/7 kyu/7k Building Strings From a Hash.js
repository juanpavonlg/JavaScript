//@ts-check

/**
 * @param {{[key: string]: any}} pairs 
 * @returns {string}
 */
function solution(pairs){
  return Object.entries(pairs).map(([k, v]) => `${k} = ${v}`).join();
} // solution()

console.log(solution({a: 1, b: '2'}));
