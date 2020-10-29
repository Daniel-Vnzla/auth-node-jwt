const router = require('express').Router();
const User = require('../models/user.js')

router.post('/singup', async (req, res) => {
	const { email, password, confirmPassword } = req.body;

	try{
		const newUser = new User({ email, password });
		const savedUser = await newUser.save();
		return res.json(savedUser);
	}
	catch(err){
		return console.log(err);
	}

})


module.exports = router;