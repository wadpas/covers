const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
	const authHeader = req.headers.authorization

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		throw new UnauthenticatedError('No token provided')
	}
	const token = authHeader.split(' ')[1]

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET)
		const testUser = payload.userId === '66c0d640e6a51a6278568d6d'
		req.user = { userId: payload.userId, testUser }
		next()
	} catch (err) {
		throw new UnauthenticatedError('Not authorized to access this route')
	}
}

module.exports = auth
