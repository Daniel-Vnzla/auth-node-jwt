const router = require('express').Router();

const { singin_get, singup_get, singin_post, singup_post } = require('../controllers/user.js');
const { logout_get } = require('../middleware/check-auth.js');

router.get('/singin', singin_get);
router.post('/singin', singin_post);

router.get('/singup', singup_get);
router.post('/singup', singup_post);

router.get('/logout', logout_get)
module.exports = router;