function Node(data) {
  this.data = data;
  this.next = null;
} // Node()

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

function getNth(node, index) {
  if (!node) {
    throw new Error(`Node not found at ${index}`);
  }
  return index ? getNth(node.next, index - 1) : node;
} // getNth()

console.log(getNth(buildOneTwoThree(), 0).data);
console.log(getNth(buildOneTwoThree(), 1).data);
