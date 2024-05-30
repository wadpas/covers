const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({})
	res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body)
	res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
	const { id: TaskID } = req.params
	const task = await Task.findById({ _id: TaskID })
	if (!task) {
		return next(createCustomError(`No task with id : ${TaskID}`, 404))
	}
	res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
	const { id: TaskID } = req.params
	const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, { new: true, runValidation: true })
	if (!task) {
		return next(createCustomError(`No task with id : ${TaskID}`, 404))
	}
	res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
	const { id: TaskID } = req.params
	const task = await Task.findOneAndDelete({ _id: TaskID })
	if (!task) {
		return next(createCustomError(`No task with id : ${TaskID}`, 404))
	}
	res.status(200).json({ task })
})

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
}
