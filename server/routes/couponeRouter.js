const Router = require('express');
const couponesController = require('../controllers/couponeController');

const router = new Router();

router.get('/coupones', couponesController.getAll);

module.exports = router;
