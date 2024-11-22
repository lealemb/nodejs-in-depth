const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401); // No Authorization header

    console.log(authHeader); // Logs "Bearer token"
    const token = authHeader.split(' ')[1]; // Extracts token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) return res.sendStatus(403); // Invalid token
        req.user = decoded.username; // Store decoded username in req.user
        next(); // Proceed to next middleware
    });
};

module.exports = verifyJWT;
