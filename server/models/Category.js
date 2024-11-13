const mongoose = require('mongoose')
const CategorySchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'name is required'],
			trim: true,
			maxLength: [30, 'name can not exceed more than 30 characters'],
		},
		description: {
			type: String,
			required: [true, 'Please provide description'],
		},
		imageUrl: {
			type: String,
			required: [true, 'Please provide imageUrl'],
		},
	},
	{ timestamps: true }
)
module.exports = mongoose.model('Category', CategorySchema)
