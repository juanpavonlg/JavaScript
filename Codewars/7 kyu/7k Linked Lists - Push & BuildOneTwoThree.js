function Node(data) {
  this.data = data;
  this.next = null;
} // Node()

function push(head, data) {
  const node = new Node(data);
  node.next = head;
  head = node;
  return head;
} // push()

function buildOneTwoThree() {
  let head = null;
  for (let data = 3; data >= 1; data--) {
    head = push(head, data);
  }
  return head;
} // buildOneTwoThree()

console.log(push(null, 1).data);
console.log(push(null, 1).next);
console.log(push(new Node(1), 2).data);
console.log(push(new Node(1), 2).next.data);
console.log(buildOneTwoThree().data);
console.log(buildOneTwoThree().next.data);
console.log(buildOneTwoThree().next.next.data);
console.log(buildOneTwoThree().next.next.next);
