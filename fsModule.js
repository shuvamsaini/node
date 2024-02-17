// const fs = require("fs");
// const path = require("path");

// const sourcePath = path.join(__dirname, "content", "subfolder", "shubbu.txt");
// const destPath = path.join(__dirname, "content", "subfolder", "renamed.txt");

// fs.rename(sourcePath, destPath, (err) => {
//   if (err) {
//     console.error("Error renaming file:", err);
//   } else {
//     console.log("File renamed successfully");
//   }
// });
// const path = require('path');
// const {readFileSync, writeFileSync, read} = require('fs');
// const filePath1 = path.join(__dirname, 'content' ,'myself.txt');
// const filePath2 = path.join(__dirname, 'content' ,'subfolder', 'renamed.txt');

// const first = readFileSync(filePath1, 'utf-8');
// const newLine = "\n\n";
// const second = readFileSync(filePath2, 'utf-8');

// console.log(first,newLine,second);

// const resultFilePath = path.join(__dirname, 'content', 'result-sync.txt');

// writeFileSync(
//     resultFilePath,
//   `Here is the result : \n${first}${newLine}${second}`
// );

// console.log("starts");
// const fs = require('fs');
// const path = require('path');
// const { readFileSync, rename } = fs;
// const { join } = path;

// const filepath = join(__dirname, 'content', 'myselffff.txt');
// const destpath = join(__dirname, 'content', 'myself.txt');

// const mySelf = readFileSync(filepath,'utf-8');
// console.log(mySelf);
// console.log("script ends");

// rename(filepath, destpath, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log("File Renamed Successfully");
//   }
// });


