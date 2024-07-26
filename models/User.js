const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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
		trim: true,
	},
})

UserSchema.pre('save', function (next) {
	this.password = bcrypt.hashSync(this.password, 10)
	next()
})

UserSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	})
}

UserSchema.methods.comparePassword = function (candidatePassword) {
	const isMatch = bcrypt.compareSync(candidatePassword, this.password)
	return isMatch
}

module.exports = mongoose.model('User', UserSchema)
