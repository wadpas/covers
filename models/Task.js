const mongoose = require('mongoose')
const TaskSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'name is required'],
			trim: true,
			maxLength: [30, 'name can not exceed more than 30 characters'],
		},
		completed: {
			type: Boolean,
			default: false,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide userId'],
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model('Task', TaskSchema)
