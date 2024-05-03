const fs = require("fs");

const data = fs.readFileSync(__dirname + "/notes.txt", "utf-8");
console.log(data);
