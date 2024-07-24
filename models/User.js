const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'User name is required'],
		mixLength: [3, 'User name should be at least 3 characters'],
		maxLength: [20, 'User name can not exceed more than 20 characters'],
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'User email is required'],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email',
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'User name is required'],
		mixLength: [6, 'User password should be at least 6 characters'],
		maxLength: [12, 'User password can not exceed more than 12 characters'],
		trim: true,
	},
})
module.exports = mongoose.model('User', UserSchema)
