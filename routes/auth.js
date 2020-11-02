const router = require('express').Router();

const { singin_get, singup_get, singin_post, singup_post } = require('../controllers/user.js');

router.get('/singin', singin_get);
router.post('/singin', singin_post);

router.get('/singup', singup_get);
router.post('/singup', singup_post);

module.exports = router;