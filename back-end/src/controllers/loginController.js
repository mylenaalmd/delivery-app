const md5 = require('md5');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { ErrorGenerator } = require('../utils/ErrorGenerator');
const { userService } = require('../services');

const login = async (req, res, next) => {
  // const { password } = req.body;
  try {
    const user = await userService.findUserByEmail(req.body);
     if (!user) throw new ErrorGenerator(404, 'Not found teste');
     if (md5(req.body.password) !== user.password) throw new ErrorGenerator(409, 'Unauthorized');
     const jwtConfig = { expiresIn: '99d', algorithm: 'HS256' };
     const secret = fs.readFileSync('jwt.evaluation.key');
     const token = jwt.sign(
       { data: 
         { id: user.id, name: user.name, email: user.email, role: user.role }, 
       },
        secret, jwtConfig,
       );
     return res.status(200).json({ token });
  } catch (error) {
      next(error);
  }
};

module.exports = {
    login,
};