// console.log("script starts");

// const { readFile } = require('fs');
// const path = require('path');

// const filePath1 = path.join(__dirname,'content','myself.txt');
// const filePath2 = path.join(__dirname,'content','result-sync.txt');

// readFile(filePath1, 'utf-8', (err, result) =>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     else{
//         console.log(result);
//     }
// })

// console.log("script ends");

console.log("script starts");
const { writeFile } = require("fs");
const path = require("path");
const filePath3 = path.join(__dirname, "content", "fourthfile.txt");
writeFile(filePath3, "This is fourth file", (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("File is created successfully");
  }
});
console.log("script ends");