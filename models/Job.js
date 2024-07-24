const mongoose = require('mongoose')
const JobSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
		trim: true,
		maxLength: [30, 'name can not exceed more than 20 characters'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
})
module.exports = mongoose.model('Task', TaskSchema)
