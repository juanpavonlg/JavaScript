function queueTime(customers, n) {
  const queues = new Array(n).fill(0);
  for (const cust of customers) {
    queues[queues.indexOf(Math.min(...queues))] += cust;
  }
  return Math.max(...queues);
} // queueTime()

console.log(queueTime([5, 3, 4], 1));
console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10], 2));
