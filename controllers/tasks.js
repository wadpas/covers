const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find({})
		res.status(200).json({ tasks })
	} catch (error) {
		res.status(500).json({ error })
	}
}

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body)
		res.status(201).json({ task })
	} catch (error) {
		res.status(500).json({ error })
	}
}

const getTask = async (req, res) => {
	try {
		const { id: TaskID } = req.params
		const task = await Task.findById({ _id: TaskID })
		if (!task) {
			return res.status(404).json({ msg: `Task ${TaskID} not found` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ error })
	}
}

const updateTask = async (req, res) => {
	try {
		const { id: TaskID } = req.params
		const task = await Task.findOneAndUpdate({ _id: TaskID }, req.body, { new: true, runValidation: true })
		if (!task) {
			return res.status(404).json({ msg: `Task ${TaskID} not found` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ error })
	}
}

const deleteTask = async (req, res) => {
	try {
		const { id: TaskID } = req.params
		const task = await Task.findOneAndDelete({ _id: TaskID })
		if (!task) {
			return res.status(404).json({ msg: `Task ${TaskID} not found` })
		}
		res.status(200).json({ task })
	} catch (error) {
		res.status(500).json({ error })
	}
}

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
}
