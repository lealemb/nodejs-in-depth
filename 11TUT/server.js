const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const PORT = process.env.PORT || 3500;
//custom middleware logger
app.use(logger);
// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);


//cross origin resourse sharing
app.use(cors(corsOptions));
//built-in middleware to handle urlencoded form data
app.use(express.urlencoded({extended: false}));

//built-in middleware for json 
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require ('./routes/root'));
app.use('/register', require ('./routes/register'));
app.use('/auth', require ('./routes/auth'));
app.use('/refresh', require ('./routes/refresh'));
app.use('/logOut', require ('./routes/logOut'));


app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));


//app.use('/')
app.all('/*', (req, res) =>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if(req.accepts('json')){
        res.json({error: '404 Not found'});
    }else {
        res.type('txt').send("404 Not found");
    }
});
app.use(errorHandler);
 
app.listen(PORT, ()=> console.log(`server running on ${PORT}`));
 //time 20  13
