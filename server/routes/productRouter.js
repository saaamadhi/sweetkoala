const Router = require('express');
const productController = require('../controllers/productController');

const router = new Router();

router.get('/products', productController.getAll);
router.get('/product', productController.getProduct);

module.exports = router;
