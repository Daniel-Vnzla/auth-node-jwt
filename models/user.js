const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, 'Please enter a email'],
		lowercase: true,
		unique: true,
		validate: [ isEmail, 'Please enter a valid email'],
	},
	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minLength:[7, 'Minimun password length is 7 characteres'],
		bcrypt: true,
	}
}, { timestamp: true });

userSchema.plugin(require('mongoose-bcrypt'));

module.exports = model('User', userSchema);


