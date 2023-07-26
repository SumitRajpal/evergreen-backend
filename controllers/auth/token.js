const jwt = require('jsonwebtoken');

const authenticateJWT = (request, response, next) => {
      const authHeader = request.headers.authorization;
      if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, 'mysecret', (err, user) => {
                  if (err) {
                        next(err);
                  }
                  next();
            });
      } else {
      response.status(401).json({message:'Missing Auth header'})
      }
};

module.exports =  {authenticateJWT}