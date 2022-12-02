const { productService } = require('../services');

const getProducts = async (_req, res, next) => {
try {
    const products = await productService.getProducts();
    return res.status(200).json(products);
} catch (error) {
    next(error);
}
};

module.exports = {
    getProducts,
};