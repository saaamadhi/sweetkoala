const Router = require('express');

const router = new Router();

const adminRouter = require('./adminRouter');
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');

router.use('/admin', adminRouter);
router.use('/user', userRouter);
router.use('/catalog', productRouter);

module.exports = router;
