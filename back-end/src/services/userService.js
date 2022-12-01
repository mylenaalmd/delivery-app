const { User } = require('../database/models');
const { loginValidator } = require('../utils/loginValidator');
const { ErrorGenerator } = require('../utils/ErrorGenerator');

const findUserByEmail = async ({ email, password }) => {
    if (!email || !password) throw new ErrorGenerator(400, 'Required fields are missing');
    loginValidator(email, password);
    const user = await User.findOne({ where: { email } });
    return user;
};

module.exports = {
    findUserByEmail,
};