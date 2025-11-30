function areYouPlayingBanjo(name) {
  name += name.charAt(0).toUpperCase() === 'R' ? " plays banjo" : " does not play banjo";
  return name;
} // areYouPlayingBanjo()

console.log(areYouPlayingBanjo("Ronda"));
