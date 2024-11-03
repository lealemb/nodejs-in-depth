const fs = require('fs');

fs.readFile('./starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})