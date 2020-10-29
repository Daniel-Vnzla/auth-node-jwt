const router = require('express').Router();
const User = require('../models/user.js');

const { validateSingUpUserData, validateSingInUserData } = require('../utils/validation.js');
const { createUser, findUserAuth } = require('../utils/mongoose.js');


router.post('/singin', async (req, res) => {
	try {
		await validateSingInUserData(req.body);
		const user = await findUserAuth(req.body);
		return res.json({ user });
	}
	catch(err){
		console.log(err);
		return res.status(500).json({ message: err.message })
	}
})

router.post('/singup', async (req, res) => {
	const { username, email, password, confirmPassword } = req.body;

	try{
		await validateSingUpUserData(req.body);
		const newUser = await createUser(req.body);
		return res.json(newUser);
	}
	catch(err){
		return res.status(500).json({ message: err.message})
	}

})


module.exports = router;