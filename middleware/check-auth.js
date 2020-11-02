const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try{
			jwt.verify(req.token, process.env.SECRET_TOKEN)
	  }
		catch(err){
			console.log(err);
		}
}