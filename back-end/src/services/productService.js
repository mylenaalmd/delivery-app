// const md5 = require('md5');
// const { Op } = require('sequelize');
const { Product } = require('../database/models');
// const { loginValidator } = require('../utils/loginValidator');
// const { ErrorGenerator } = require('../utils/ErrorGenerator');

const getProducts = async () => {
    const products = await Product.findAll();
    return products;
};

module.exports = {
    getProducts,
};