const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new UnauthenticatedError('No token provided')
	}
	const token = authHeader.split(' ')[1]

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = { id: decoded.id, username: decoded.username } // Attach the user ID to the request object
	} catch (err) {
		throw new UnauthenticatedError('Not authorized to access this route')
	}

	next()
}

module.exports = auth
