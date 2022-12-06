const fs = require('fs');
const jwt = require('jsonwebtoken');

const tokenGenerator = (id, name, email, role) => {
    const jwtConfig = { expiresIn: '99d', algorithm: 'HS256' };
    const secret = fs.readFileSync('jwt.evaluation.key');
    const token = jwt.sign(
      { data: 
        { id, name, email, role }, 
      },
       secret, jwtConfig,
      );
return token;
};

module.exports = { tokenGenerator };