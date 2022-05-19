// console.log("Hello from server");

function Greet() {
  console.log("Good Morning");
}
// Greet();

// setTimeout(Greet, 2000)

let student = {
  name: "Tanishq Uppal",
  class: 11,
  section: "A",
};

function text() {
  for (key in student) {
    console.log(`The ${key} of the student is ${student[key]}`);
  }
}

// setTimeout(text, 1000);

timOut = setTimeout(text, 2000);
console.log(timOut)
clearTimeout(1);


