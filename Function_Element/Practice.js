function max(a, b) {
  let c = a > b;
  return c;
}
function min(a, b) {
  let c = a < b;
  return c;
}
function avg(a, b) {
  let c = (a + b) / 2;
  return c;
}

let a = 304;
let b = 406;

let maximum = max(a, b);
console.log(maximum);
let minimum = min(a, b);
console.log(minimum);
let average = avg(a, b);
console.log(average);
