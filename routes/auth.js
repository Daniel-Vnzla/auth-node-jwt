const router = require('express').Router();
const User = require('../models/user.js')

router.post('/singup', (req, res) => {
	const { email, password, confirmPassword } = req.body;

	user = [...user, { email, password }];

	res.json({ message: 'user created' });
})
