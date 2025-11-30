function quote(fighter) {
  switch (fighter.toLowerCase()) {
    case "george saint pierre":
      return "I am not impressed by your performance.";
    case "conor mcgregor":
      return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    default:
      return "Unknown fighter";
  }  
}; // quote()

console.log(quote("george saint pierre"));
console.log(quote("conor mcgregor"));
console.log(quote("George Saint Pierre"));
console.log(quote("Conor McGregor"));
