const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema(
	{
		title: {
			type: String,
			maxlength: [100, 'Name cannot be more than 100 characters'],
			required: [true, 'product name must be provider'],
		},
		price: {
			type: Number,
			required: [true, 'product price must be provider'],
		},
		description: {
			type: String,
			required: [true, 'Please provide product description'],
			maxlength: [1000, 'Description cannot be more than 1000 characters'],
		},
		category: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		rating: {
			rate: { type: Number, default: 0 },
			count: { type: Number, default: 0 },
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
