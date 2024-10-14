const express = require('express')
const router = express.Router()
const {
	getAllCategories,
	createCategory,
	getCategory,
	updateCategory,
	deleteCategory,
	addCategories,
} = require('../controllers/categories')

router.route('/').get(getAllCategories).post(createCategory).put(addCategories)
router.route('/:id').get(getCategory).patch(updateCategory).delete(deleteCategory)

module.exports = router
