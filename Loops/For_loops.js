// * This to test the file
// console.log("Hello world")

// * This is a Example
// let i = 10;

// for (let i = 10; i > -1; i--) {console.log(i);}

// * This is a Old method of loops for array
let friends = ["A1", "B1", "C1"];

for (let index = 0; index < friends.length; index++) {
  console.log("Hello Friend, " + friends[index]);
}

// * This is Morden method of loops for array
friends.forEach(function (element) {
  console.log("Hello Friend, " + element + " To Morden JS");
});

// * This is Newest method of loops for array
for (element of friends) {
  console.log("Hello Friend, " + element + " To Newest JS");
}

// * This is for extarting info from an object

let student = {
  name: "Tanishq Uppal",
  class: 11,
  section: "A",
};

for (key in student) {
  console.log(`The ${key} of the student is ${student[key]}`);
}
