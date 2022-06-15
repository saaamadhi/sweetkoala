const Router = require('express');
const orderController = require('../controllers/orderController');

const router = new Router();

router.get('/orders', orderController.getAll);
router.post('/orders/newOrder', orderController.add);

module.exports = router;
