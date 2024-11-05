const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) =>{
    res.send('Hello,');

});

app.listen(PORT, ()=> console.log(`server running on ${PORT}`));
