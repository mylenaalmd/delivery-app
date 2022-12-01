const { userService } = require('../services');
const { ErrorGenerator } = require('../utils/ErrorGenerator')
const md5 = require('md5')
const fs = require('fs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
      const { email, password } = req.body;
      
      if (!email || !password) throw new ErrorGenerator(400, 'Required fields are missing')
     
      const user = await userService.findUserByEmail(email);
      
      if (!user) throw new ErrorGenerator(404, 'Invalid email or password');

      const comparedPassword = await md5(password);

      if(comparedPassword !== user.password) throw new ErrorGenerator(409, 'Unauthorized');

      const jwtConfig = { expiresIn: '99d', algorithm: 'HS256' };
      const secret = fs.readFileSync('jwt.evaluation.key');
      const token = jwt.sign(
        { 
          data: {
             id: user.id, name: user.name, email: user.email, role: user.role 
            }, 
        }, secret, jwtConfig);
      
      return res.status(200).json({ token });
  } catch (error) {
      throw new ErrorGenerator(500, error.message)
  }
};

module.exports = {
    login,
}