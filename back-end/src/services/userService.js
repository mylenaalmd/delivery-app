const md5 = require('md5');
const { User } = require('../database/models');
const { loginValidator } = require('../utils/loginValidator');
const { ErrorGenerator } = require('../utils/ErrorGenerator');

const findUserByEmail = async ({ email, password }) => {
    if (!email || !password) throw new ErrorGenerator(400, 'Required fields are missing');
    loginValidator(email, password);
    const user = await User.findOne({ where: { email } });
    return user;
};

const createUser = async (user) => {
    if (!user.name) throw new ErrorGenerator(400, 'Required fields are missing');
    const findUser = await findUserByEmail(user);
    console.log('busca usuário >>>>>>>>', findUser);
    if (findUser) throw new ErrorGenerator(404, 'Cliente já cadastrado');
    console.log('>>>> linha 18 <<<<<');
    const { name, email, password } = user;
    if (name.length >= 12) throw new ErrorGenerator(404, 'Dados de cadastro inválidos');
    console.log('>>>> linha 21 <<<<<');
    const passwordEncripted = md5(password);
    console.log('>>>> linha 24 <<<<< :', name, email, passwordEncripted);
    const userCreated = await User.create(
        { name, email, password: passwordEncripted, role: 'customer' },
);
    console.log('usuário criado >>>>>>>>', userCreated);
    
    return userCreated;
};

module.exports = {
    findUserByEmail,
    createUser,
};