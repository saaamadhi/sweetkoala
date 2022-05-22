const Router = require('express');

const router = new Router();

const userRouter = require('./userRouter');
const productRouter = require('./productRouter');

router.use('/user', userRouter);
router.use('/catalog', productRouter);

module.exports = router;
