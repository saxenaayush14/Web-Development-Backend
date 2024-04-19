//CONCEPT OF BLOCKING AND NON-BLOCKING EXECUTION

/*Synchronous or blocking
-line by line execution of code guaranteed */

const fs=require("fs");
let text=fs.readFileSync("delete.txt","utf-8");
console.log(text);
console.log("This is synchronous code");


/*Asynchronous or non-blocking
-line by line execution of code not guaranteed */

//const fs=require("fs");
fs.readFile("delete.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is Asynchronous code");