const User = require('../models/user.js');

const { createUser, findUserAuth } = require('../utils/mongoose.js');
const { handleErrors } = require('../utils/validation.js');

singIn = async (req, res) => {
	try {
		const user = await findUserAuth(req.body);
		return res.json({ user });
	}
	catch(err){
		const errors = handleErrors(err);
		return res.status(500).json(errors);
	}
}

const singUp = async (req, res) => {
	const { email, password, confirmPassword } = req.body;

	try{
		const newUser = await createUser(req.body);
		return res.json(newUser);
	}
	catch(err){
		const errors = handleErrors(err);
		return res.status(500).json(errors);
	}

}

module.exports = {
	singIn,
	singUp,
}