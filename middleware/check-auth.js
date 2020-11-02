const { verify } = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
	const token = req.cookies.token;
	try{
			verify(token, process.env.SECRET_TOKEN, (err, token) => {
				if (err) {
					console.log(err.message)
					location.assign('/');
				}
				console.log(token);
				next();
			})
	  }
		catch(err){
			console.log(err);
		}
}

module.exports = {
	checkAuth
} 