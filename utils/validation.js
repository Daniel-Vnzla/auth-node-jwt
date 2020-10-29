const User = require('../models/user.js');
const { compare } = require('bcrypt');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

const validateSingUpUserData = async ({ username, email, password, confirmPassword }) => {

	if(!username || !email || !password || !confirmPassword) {
		throw new Error('Invalid user data');
	}
	if (!validateEmail(email)) throw new Error('Invalid email format');
	if (password !== confirmPassword) throw new Error('Password not match');

	const findUserAuth = await User.findOne({ email: email.toLowerCase() });
	if (findUserAuth !== null) throw new Error('Email is already registered')
	
}

const comparePassword = async (loginPassword, registerPassword) => {
	const passworMatch = await compare(loginPassword, registerPassword);
	return { passworMatch }
}

const validateSingInUserData = async ({ email, password}) => {
	if (!email || !password) throw new Error('Invalid user data');
	if (!validateEmail(email)) throw new Error('Invalid email format');
	if (password.length < 7) throw new Error('password must be 7 characteres min');
}

module.exports = {
	validateSingUpUserData,
	validateSingInUserData,
	comparePassword,

}