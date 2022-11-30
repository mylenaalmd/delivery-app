const {User} = require("../database/models");

const findUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

module.exports = {
    findUserByEmail,
}