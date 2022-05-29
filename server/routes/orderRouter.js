const Router = require('express');
const orderController = require('../controllers/orderController');

const router = new Router();

router.get('/order', orderController.getAll);

module.exports = router;
