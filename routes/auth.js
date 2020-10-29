const router = require('express').Router();

const { singIn, singUp } = require('../controllers/user.js');

router.post('/singin', singIn);
router.post('/singup', singUp);


module.exports = router;