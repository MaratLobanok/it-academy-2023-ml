let a = 5;

let b = 10;

let c = a + b;


const fs = require("fs-extra");
const { fileURLToPath } = require("url");

fs.mkdirp('NewFolder');

fs.writeFile("./NewFolder/file.txt", "Hello IT-Academy",);

fs.mkdirp('NewFolder2');

fs.writeFile("./NewFolder/file.txt", "Hello IT-Academy",);



fs.rename("NewFolder/file.txt", "NewFolder2/file.txt");

fs.mkdirp('NewFolder3');

fs.copy("NewFolder2/file.txt", "NewFolder3/file.txt");






