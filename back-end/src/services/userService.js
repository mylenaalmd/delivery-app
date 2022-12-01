const md5 = require('md5');
const { Op } = require('sequelize');
const { User } = require('../database/models');
const { loginValidator } = require('../utils/loginValidator');
const { ErrorGenerator } = require('../utils/ErrorGenerator');

const findUserByEmail = async ({ email, password, name = 'xxxxxx' }) => {
    if (!email || !password) throw new ErrorGenerator(400, 'Required fields are missing');
    loginValidator(email, password);
    const user = await User.findOne({ where: { [Op.or]: [{ email }, { name }] } });
    return user;
};

const createUser = async (user) => {
    if (!user.name) throw new ErrorGenerator(400, 'Required fields are missing');
    const findUser = await findUserByEmail(user);
    if (findUser) throw new ErrorGenerator(409, 'Conflict');
    const { name, email, password } = user;
    if (name.length < 12) throw new ErrorGenerator(404, 'Dados de cadastro inválidos');
    const passwordEncripted = md5(password);
    const userCreated = await User.create(
        { name, email, password: passwordEncripted, role: 'customer' },
);
    return userCreated;
};

module.exports = {
    findUserByEmail,
    createUser,
};