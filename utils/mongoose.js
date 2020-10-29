const User = require('../models/user.js');
const { comparePassword } = require('../utils/validation.js');

const createUser = async ({ username, password, email }) => {
	const newUser = new User({ username, email: email.toLowerCase(), password });
	const savedUser = await newUser.save();
	return savedUser;
}

const findUserAuth = async ({ email, password}) => {
	const user = await User.findOne({ email });
	if (!user) throw new Error('Email not found');
	 
	const { passworMatch } = await comparePassword(password, user.password);
	if (!passworMatch) throw new Error('Incorrect password');
	return user
} 

module.exports = {
	createUser,
	findUserAuth,
}
