const express = require('express')
const router = express.Router()
const { getMovies, createMovie, getMovie, updateMovie, deleteMovie, addMovies } = require('../controllers/movies')

router.route('/').get(getMovies).post(createMovie).put(addMovies)
router.route('/:id').get(getMovie).patch(updateMovie).delete(deleteMovie)

module.exports = router
