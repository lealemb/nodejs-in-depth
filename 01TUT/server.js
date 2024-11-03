console.log("Hello World");
// console.log(global );
const os = require('os');
const path = require('path');
const {add,subtract,multiplay,divide} = require('./math');


console.log(add(1,2));
console.log(subtract(1,2));
console.log(multiplay(1,2));
console.log(divide(1,2));

// console.log(os.type())
// console.log(os.version())
// console.log(os. homedir())


// console.log(__dirname)
// console.log(__filename)


// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))