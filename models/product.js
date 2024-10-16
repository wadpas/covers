const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema(
	{
		name: {
			type: String,
			maxlength: [100, 'Name cannot be more than 100 characters'],
			required: [true, 'product name must be provider'],
		},
		description: {
			type: String,
			required: [true, 'Please provide product description'],
			maxlength: [1000, 'Description cannot be more than 1000 characters'],
		},
		categoryId: {
			type: mongoose.Types.ObjectId,
			ref: 'Category',
			required: [true, 'Please provide product category'],
		},
		imageUrl: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: [true, 'product price must be provider'],
		},
		rating: {
			rate: { type: Number, default: 0 },
			count: { type: Number, default: 0 },
		},
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', ProductSchema)
