const { sign } = require('jsonwebtoken');

const createToken = (id) => {
	const maxAge = 60 * 60 * 24;
	return sign({ id }, process.env.SECRET_TOKEN, {
		expiresIn: maxAge,
	})
}



module.exports = {
	createToken
}