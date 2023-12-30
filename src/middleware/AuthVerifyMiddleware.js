const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['token'];
    jwt.verify(token, "SecretKey123456789", function(err, decoded){
        if(err){
            res.status(401).json({status: "unauthorized"})
        } else {
            // Get user name from decoded token & Add with Req Header
            const username = decoded['data']['userName'];
            req.headers.username = username;
            next();
        }
    })
}