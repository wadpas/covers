const { BadRequestError } = require('../errors')

const testUser = (req, res, next) => {
	if (req.user.testUser) {
		throw new BadRequestError('Demo User. Read Only!')
	}
	next()
}

module.exports = testUser
