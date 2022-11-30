const loginValidator = (email, password) => {
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if(!isEmailValid || password.length >= 6){
        throw new ErrorGenerator(404, 'Dados de login inválidos')
    };
    return;
};

module.exports = {
    loginValidator
}