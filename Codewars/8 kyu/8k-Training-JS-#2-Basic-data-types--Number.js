let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1() {
  let a = v1,   
      b = v1;   
  return a + b;
} // equal1()

//Please refer to the example above to complete the following functions
function equal2() {
  let a =  v3, //set number value to a
      b =  v1; //set number value to b
  return a - b;
} // equal2()

function equal3() {
  let a =  v1, //set number value to a
      b =  v5; //set number value to b
  return a * b;
} // equal3()

function equal4() {
  let a =  v4, //set number value to a
      b =  v5; //set number value to b
  return a / b;
} // equal4()

function equal5() {
  let a =  v6, //set number value to a
      b =  v3; //set number value to b
  return a % b;
} // equal5()

console.log(equal1(), equal2(), equal3(), equal4(), equal5());