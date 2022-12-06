const express = require('express');
const { saleController } = require('../controllers');

const router = express.Router();

router.post('/', saleController.createSale);
router.get('/', saleController.findSalesById);

module.exports = router;