function reverse(string) {
  return string.trim().split(" ").reverse().join(" ");
} // reverse()

console.log(reverse("Hello World"));
console.log(reverse("Hi There."));
