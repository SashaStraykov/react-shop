const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    try{
        const userToken = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(userToken, process.env.JWT_SECRET);
        if(decoded) {
            next();
        }

      } catch(e) {
        res.status(511).json({message: e})
      }
}