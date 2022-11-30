const { userService } = require('../services');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
      const { email } = req.body;
      
      if (!email) {
          return res.status(400).json({ message: 'Some required fields are missing' });
      }

      const user = await userService.findUserByEmail(email);
      console.log(user)

      if (!user) return res.status(404).json({ message: 'User not registered' });

      const jwtConfig = { expiresIn: '99d', algorithm: 'HS256' };
      const secret = fs.readFileSync('jwt.evaluation.key')
      const token = jwt.sign({ 
          data: { id: user.id, name: user.name, email: user.email, role: user.role }, 
      }, secret, jwtConfig);
      
      return res.status(200).json({ token });
  } catch (error) {
      return res.status(500).send(error.message);
  }
};

module.exports = {
    login,
}