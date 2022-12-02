const { saleService } = require('../services');

const createSale = async (req, res, next) => {
  try {
    const result = await saleService.createSale(req.body);
    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createSale,
};