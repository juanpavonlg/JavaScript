function Node(data) {
  this.data = data;
  this.next = null;
} // Node()

function length(head) {
  return head ? 1 + length(head.next) : 0;
} // length()

function count(head, data) {
  return head ? (head.data === data ? 1 : 0) + count(head.next, data) : 0;
} // count()

function push(head, data) {
  const node = new Node(data);
  node.next = head;
  return node;
} // push()

function buildOneTwoThree() {
  let head = null;
  for (let data = 3; data >= 1; data--) {
    head = push(head, data);
  }
  return head;
} // buildOneTwoThree()

console.log(length(null));
console.log(length(new Node(99)));
console.log(length(buildOneTwoThree()));
const list = buildOneTwoThree();
console.log(count(list, 1));
console.log(count(list, 2));
console.log(count(list, 3));
console.log(count(list, 99));
console.log(count(null, 1));
