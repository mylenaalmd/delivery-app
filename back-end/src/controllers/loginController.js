const md5 = require('md5');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { ErrorGenerator } = require('../utils/ErrorGenerator');
const { userService } = require('../services');

const login = async (req, res) => {
  // const { password } = req.body;
  try {
      const user = await userService.findUserByEmail(req.body);
      if (!user) throw new ErrorGenerator(404, 'Invalid email or password');
      if (md5(req.body.password) !== user.password) throw new ErrorGenerator(409, 'Unauthorized');
      const jwtConfig = { expiresIn: '99d', algorithm: 'HS256' };
      const secret = fs.readFileSync('jwt.evaluation.key');
      const token = jwt.sign(
        { data: { id: user.id, name: user.name, email: user.email, role: user.role } },
         secret, jwtConfig,
);
      return res.status(200).json({ token });
  } catch (error) {
     return res.status(500).json({ error: error.message });
  }
};

module.exports = {
    login,
};