const jwt = require('jsonwebtoken'); //verify the token
const config = require('config'); //access to the secret

// when using middleware we need to call next which tells the function to move on to the next piece of middleware.
module.exports = function(req, res, next) {
	// Get token from header
	const token = req.header('x-auth-token'); // key to the token inside the header

	// check if no token for routes we choose to protect
	if (!token) {
		return res.status(401).json({ msg: 'No token, Auth denied' });
	}
	// if there is a token then we need to verify it

	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Token is not valid' });
	}
};
