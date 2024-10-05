const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'name is required'],
			trim: true,
			maxLength: [30, 'name can not exceed more than 30 characters'],
		},
		owner: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [true, 'Please provide userId'],
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model('Category', CategorySchema)
