const jwt = require('jsonwebtoken');
const JWT_SECRET = "MERNcoding";

const fetchuser = (res, req, next) => {
    // Get the user from the jwt token and add id to req obj
    const token = req.header('auth-token');

    if(!token) {
        return req.status(401).send({error: "Please authenticate using a valid token"})
    }

    try {
    const string = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next() 
    } catch (error) {
        return req.status(401).send({error: "Please authenticate using a valid token"})
    }
};


module.exports = fetchuser;