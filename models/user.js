const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const bcryptPassword = require('mongoose-bcrypt');

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

module.exports = model('User', userSchema);


