//TUTORIAL OF BUILT IN MODULES OF NODE JS

//THIS IS THE EXAMPLE OF FILE SYSTEM MODULES

const fs=require("fs");
let text=fs.readFileSync("delete.txt","utf-8");
console.log(text);
text=text.replace("Ayush","Saxena Sahab");
console.log("Creating a new file...");
fs.writeFileSync("ayush.txt",text);