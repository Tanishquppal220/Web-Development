const fs = require('fs')

const text = fs.readFileSync("Temp.txt" , "utf8");
console.log(text);

let t1 = text.replace("Hardik" , "Tanishq");

fs.writeFileSync("Temp.txt", t1)