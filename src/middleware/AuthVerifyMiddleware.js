const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['token'];
    try {
        const decoded = jwt.verify(token, 'SecretKey123456789');
        if(decoded['exp'] > Math.floor(Date.now() / 1000)){
            next();
        } else {
            res.status(400).json('UnAuthorized');
        }
    } catch (error) {
        res.status(400).json(error);
        console.log('Token error')
    }
    // jwt.verify(token, "SecretKey123456789", function(err, decoded){
    //     if(err){
    //         res.status(401).json({status: "unauthorized"})
    //     } else {
    //         // Get user name from decoded token & Add with Req Header
    //         // const username = decoded['data']['username'];
    //         // req.headers.username = username;
    //         console.log(decoded['data']);
    //         next();
    //     }
    // })
}