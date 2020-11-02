const User = require('../models/user.js');

const { createUser, findUserAuth } = require('../utils/mongoose.js');


// const handlineErrors = (err) => {
// 	const errors = {
// 		email: "",
// 		password: ""
// 	}
// 
// 	
// }

const singIn = async (req, res) => {
	try {
		const user = await findUserAuth(req.body);
		return res.json({ user });
	}
	catch(err){
		console.log(err);
		return res.status(500).json({ message: err.message })
	}
}

const singUp = async (req, res) => {
	const { email, password, confirmPassword } = req.body;

	try{
		const newUser = await createUser(req.body);
		return res.json(newUser);
	}
	catch(err){
		return res.status(500).json({ message: err})
	}

}

module.exports = {
	singIn,
	singUp,
}