const router = require('express').Router();
const User = require('../models/user.js')
const { compare } = require('bcrypt');

const comparePassword = async (loginPassword, registerPassword) => {
	const passworMatch = await compare(loginPassword, registerPassword);
	return { passworMatch }
}

router.post('/singin', async (req, res) => {
	const { email, password } = req.body;
	try {
		const findUserAuth = await User.findOne({ email });
		const { passworMatch } = await comparePassword(password, findUserAuth.password);

		return res.json({user: findUserAuth});
	}
	catch(err){
		console.log(err);
	}
})

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