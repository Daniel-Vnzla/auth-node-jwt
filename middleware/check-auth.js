const User = require('../models/user.js');
const { verify } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
	const token = req.cookies.token;

	if (token) {
		verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
			if (err){
				console.log(err.message)
				res.redirect('/singin');
			}
			next();
		})
	}else res.redirect('/singin');
}

const logout_get = (req, res) => {
	res.cookie('token', "", { maxAge: 1 });
	res.redirect('/');
}

module.exports = {
	checkAuth,
	logout_get,
} 