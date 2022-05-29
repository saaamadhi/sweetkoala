const Router = require('express');
const userController = require('../controllers/userController');
const productController = require('../controllers/userController');
const orderController = require('../controllers/orderController');
const couponeController = require('../controllers/couponeController');

const router = new Router();

router.get('/login', userController.adminLogin);

router.get('/products', productController.getAll);
router.get('/customers', userController.getAll);
router.get('/orders', orderController.getAll);
router.get('/coupones', couponeController.getAll);

router.post('/products', productController.add);
router.post('/customers', userController.add);
router.post('/orders', orderController.add);
router.post('/coupones', couponeController.add);

router.put('/products', productController.update);
router.put('/customers', userController.update);
router.put('/orders', orderController.update);
router.put('/coupones', couponeController.update);

router.delete('/products', productController.delete);
router.delete('/customers', userController.delete);
router.delete('/orders', orderController.delete);
router.delete('/coupones', couponeController.delete);

module.exports = router;
