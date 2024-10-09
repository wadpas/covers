const Category = require('../models/Category')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllCategories = async (req, res) => {
	const categories = await Category.find({}).sort('name')
	res.status(StatusCodes.OK).json({ categories, pagination: {} })
}

const getCategory = async (req, res, next) => {
	const {
		user: { userId },
		params: { id: categoryId },
	} = req
	const category = await Category.findById({ _id: categoryId, createdBy: userId })
	if (!category) {
		throw new NotFoundError(`No category with id ${categoryId}`)
	}
	res.status(StatusCodes.OK).json({ category })
}

const createCategory = async (req, res) => {
	req.body.owner = req.user.userId
	const category = await Category.create(req.body)
	res.status(StatusCodes.CREATED).json({ category })
}

const updateCategory = async (req, res) => {
	const {
		body: { name },
		user: { userId },
		params: { id: categoryId },
	} = req
	if (name === '' || name === null) {
		throw new BadRequestError('Name field cannot be empty')
	}
	const category = await Category.findOneAndUpdate({ _id: categoryId, owner: userId }, req.body, {
		new: true,
		runValidation: true,
	})
	if (!category) {
		throw new NotFoundError(`No category with id ${categoryId}`)
	}
	res.status(StatusCodes.OK).json({ category })
}

const deleteCategory = async (req, res) => {
	const {
		user: { userId },
		params: { id: categoryId },
	} = req
	const category = await Category.findByIdAndRemove({ _id: categoryId, owner: userId })
	if (!category) {
		throw new NotFoundError(`No job with id ${categoryId}`)
	}
	res.status(StatusCodes.OK).send({ message: 'Delete is successful!' })
}

module.exports = {
	getAllCategories,
	createCategory,
	getCategory,
	updateCategory,
	deleteCategory,
}
