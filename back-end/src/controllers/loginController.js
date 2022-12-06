const md5 = require('md5');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { ErrorGenerator } = require('../utils/ErrorGenerator');
const { userService } = require('../services');

const login = async (req, res, next) => {
  try {
    const user = await userService.findUserByEmail(req.body);
    if (!user) throw new ErrorGenerator(404, 'Not found');
    const { id, name, email, role, password } = user;
     if (md5(req.body.password) !== password) throw new ErrorGenerator(409, 'Unauthorized');
     const jwtConfig = { expiresIn: '99d', algorithm: 'HS256' };
     const secret = fs.readFileSync('jwt.evaluation.key');
     const token = jwt.sign(
       { data: 
         { id, name, email, role }, 
       },
        secret, jwtConfig,
       );
     return res.status(200).json({ name, email, role, token });
  } catch (error) {
      next(error);
  }
};

module.exports = {
    login,
};