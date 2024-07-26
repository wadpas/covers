const mongoose = require('mongoose')
const JobSchema = mongoose.Schema(
	{
		company: {
			type: String,
			required: [true, 'Company name is required'],
			maxLength: [20, 'Company name can not exceed more than 20 characters'],
			trim: true,
		},
		position: {
			type: String,
			required: [true, 'Position name is required'],
			maxLength: [120, 'Position name can not exceed more than 120 characters'],
			trim: true,
		},
		status: {
			type: String,
			enum: {
				values: ['interview', 'declined', 'pending'],
				message: '{VALUE} is not supported',
			},
			default: 'pending',
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide user'],
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model('Job', JobSchema)
