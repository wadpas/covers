const express = require('express')
const router = express.Router()
const authMid = require('../middleware/auth')
const testUser = require('../middleware/test-user')
const { login, register, checkUser, updateUser } = require('../controllers/auth')

const rateLimiter = require('express-rate-limit')
const apiLimiter = rateLimiter({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10,
	message: 'Too many requests from this IP, please try again after 15 minutes',
})

router.post('/login', apiLimiter, login)
router.post('/register', apiLimiter, register)
router.get('/user', authMid, checkUser)
router.patch('/updateUser', authMid, testUser, updateUser)

module.exports = router
