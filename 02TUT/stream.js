const fs = require('fs');
const rs = fs.createReadStream('./lorem.txt', {endcoding: 'utf8'});
const ws = fs.createWriteStream('./new-lorem.txt');

// rs.on('data', (datachunk) => {
//     ws.write(datachunk);
// })

rs.pipe(ws);