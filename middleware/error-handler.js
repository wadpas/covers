const { CustomApiError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
	console.log(err)
	if (err instanceof CustomApiError) {
		return res.status(err.statusCode).json({ message: err.message })
	}

	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong, please try again' })
}

module.exports = errorHandler
