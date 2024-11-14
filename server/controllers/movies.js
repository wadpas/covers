const Movie = require('../models/Movie')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getMovies = async (req, res) => {
	const { year = 2015, limit = 12, page = 1, sort = -1 } = req.query
	const movies = await Movie.find({ year: year })
		.limit(limit)
		.skip(limit * (page - 1))
		.sort({ released: sort })

	res.status(StatusCodes.OK).json({ movies, count: movies.length })
}

const getMovie = async (req, res) => {
	const movieId = req.params.id
	const movie = await Movie.findById({ _id: movieId })
	res.status(StatusCodes.OK).json({ movie })
}

const createMovie = async (req, res) => {
	req.body.owner = req.user.userId
	const movie = await Movie.create(req.body)
	res.status(StatusCodes.CREATED).json({ movie })
}

const updateMovie = async (req, res) => {
	const {
		body: { name },
		user: { userId },
		params: { id: movieId },
	} = req
	if (name === '' || name === null) {
		throw new BadRequestError('Name field cannot be empty')
	}
	const movie = await Movie.findOneAndUpdate({ _id: movieId, owner: userId }, req.body, {
		new: true,
		runValidation: true,
	})
	if (!movie) {
		throw new NotFoundError(`No movie with id ${movieId}`)
	}
	res.status(StatusCodes.OK).json({ movie })
}

const deleteMovie = async (req, res) => {
	const {
		user: { userId },
		params: { id: movieId },
	} = req
	const movie = await Movie.findByIdAndRemove({ _id: movieId, owner: userId })
	if (!movie) {
		throw new NotFoundError(`No job with id ${movieId}`)
	}
	res.status(StatusCodes.OK).send({ message: 'Delete is successful!' })
}

const addMovies = async (req, res) => {
	const movies = await Movie.insertMany(req.body)
	res.status(StatusCodes.CREATED).json({ movies })
}

module.exports = {
	getMovies,
	createMovie,
	getMovie,
	updateMovie,
	deleteMovie,
	addMovies,
}
