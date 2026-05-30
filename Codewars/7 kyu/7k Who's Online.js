//@ts-check

/**
 * @param {{username: string, status: string, lastActivity: number}[]} friends
 * @returns {{online?: string[], offline?: string[], away?: string[]}}
 */
const whosOnline = (friends) => {
  return friends.reduce((a, e) => {
    const status =
      e.status === "online" && e.lastActivity > 10 ? "away" : e.status;
    a[status] ? a[status].push(e.username) : (a[status] = [e.username]);
    return a;
  }, {});
}; // whosOnline()

console.log(
  whosOnline([
    {
      username: "David",
      status: "online",
      lastActivity: 10,
    },
    {
      username: "Lucy",
      status: "offline",
      lastActivity: 22,
    },
    {
      username: "Bob",
      status: "online",
      lastActivity: 104,
    },
  ]),
);
console.log(whosOnline([]));
