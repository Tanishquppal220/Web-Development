// console.log('Hello World!');

// let friends = ["Robert"];

// function greet() {
//     for (let index = 0; index < friends.length; index++) {
//       console.log("Hello Friend, " + friends[index]);
//     }
// }
// setInterval(greet, 2000);
function displaytime(params) {
    time = new Date()
    console.log(time);
    document.getElementById('time').innerHTML = time
}
setInterval(displaytime, 1000);