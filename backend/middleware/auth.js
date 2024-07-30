var jwt = require('jsonwebtoken');
var User = require('../models/user')

const auth = async (req, res, next) => {
    console.log("🚀 ~ protect ~ req:", req.headers)
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: "You are not authorized" });
    }
    // console.log("🚀 ~ protect ~ authorization:", authorization)
    const token = authorization.split(' ')[1]
    // Check if not token
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // console.log("🚀 ~ auth ~ decoded:", decoded)
        req.user = decoded;
        // const user = await User.findById(decoded.id);
        // console.log("req.user:", req.user)
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' , err });
    }
};

module.exports = {
    auth,
};
