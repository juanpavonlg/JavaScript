function anyArrows(arrows){
  return arrows.some((arrow) => !arrow.damaged);
} // anyArrows()

console.log(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]));
