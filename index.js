const fs = require("fs");
const dt = new Date();
const textIn = fs.readFileSync("./data/text-in.txt","utf-8");

fs.writeFileSync("./data/text-out.txt",`This is a new line\n ${textIn}\ncreated on ${dt.toDateString()}`)
console.log(textIn)


