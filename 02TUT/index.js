const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log("Hello .....");

fs.writeFile(path.join(__dirname,'reply.txt'), 'Nice to meet you',(err) => {
    if (err) throw err;
    console.log('write complete');
})


process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1); 
})