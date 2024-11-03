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

    fs.appendFile(path.join(__dirname,'reply.txt'), '\n\n Yes it is.',(err) => {
        if (err) throw err;
        console.log('Append complete');
        fs.rename(path.join(__dirname,'reply.txt'), path.join(__dirname,'newReply.txt'),(err) => {
            if (err) throw err;
            console.log('Rename complete');
        })
    })
})




process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1); 
})