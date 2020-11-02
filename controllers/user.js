const path = require('path');
const User = require('../models/user.js');

const { createUser, findUserAuth } = require('../utils/mongoose.js');
const { handleErrors } = require('../utils/validation.js');


const singin_get = (req, res) => {
	return res.sendFile(path.resolve('views/singin.html'))

}

const singup_get = (req, res) => {
	return res.sendFile(path.resolve('views/singup.html'))
}


const singin_post = async (req, res) => {
	try {
		const user = await findUserAuth(req.body);
		return res.json({ user });
	}
	catch(err){
		const errors = handleErrors(err);
		return res.status(500).json(errors);
	}
}


const singup_post = async (req, res) => {
	const { email, password } = req.body;

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
	singin_get,
	singup_get,
	singin_post,
	singup_post,
}