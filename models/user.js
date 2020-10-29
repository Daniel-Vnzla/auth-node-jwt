const { Schema, model } = require('mongoose');


const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		bcrypt: true,
	}
}, { timestamp: true });

userSchema.plugin(require('mongoose-bcrypt'));

module.exports = model('User', userSchema);


