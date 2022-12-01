const { User } = require("../database/models");
const { loginValidator } = require("../utils/loginValidator");

const findUserByEmail = async (email, password) => {
    loginValidator(email, password);
    const user = await User.findOne({ where: { email } });
    return user;
};

module.exports = {
    findUserByEmail,
}