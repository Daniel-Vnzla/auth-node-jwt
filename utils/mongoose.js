const User = require('../models/user.js');

const createUser = async ({ username, password, email }) => {
	const newUser = new User({ username, email: email.toLowerCase(), password });
	const savedUser = await newUser.save();
	return savedUser;
}

module.exports = {
	createUser,
}
