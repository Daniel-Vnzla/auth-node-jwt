const handleErrors = (err) => {
	const errors = {};
	Object.values(err.errors).forEach(({ properties }) => {
		errors[properties.path] = properties.message;
	})
	return errors;
}


module.exports = { 
	handleErrors,
}