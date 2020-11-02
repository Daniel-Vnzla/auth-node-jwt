const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcryptPassword = require('mongoose-bcrypt');
const { compare } = require('bcrypt');

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, 'Please enter a email.'],
		lowercase: true,
		unique: true,
		index: true,
		trim: true,
		validate: [ isEmail, 'Please enter a valid email.'],
	},
	password: {
		type: String,
		required: [true, 'Please enter a password.'],
		minlength:[7, 'Minimun password length is 7 characteres.'],
		bcrypt: true,
	}
}, { timestamp: true });

userSchema.plugin(bcryptPassword);
userSchema.plugin(uniqueValidator, { message: 'Email already exist.' });

userSchema.statics.login = async function (email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const auth = await compare(password, user.password);
		if (auth) return user;
		throw { password: 'Incorrect password' };
	}
	throw { email: 'That email is not registered' };
}


module.exports = model('User', userSchema);


