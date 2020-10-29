const { Schema, model } = require('mongoose');


const userSchema = new Schema({
	email: {
		type: String,
		required: true,
	}
	passowrd: {
		type: String,
		required: true,
	}
}, { timestamp: true });


module.exports = model('User', userSchema);


