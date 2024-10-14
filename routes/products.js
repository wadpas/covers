const express = require('express')
const router = express.Router()
const authMid = require('../middleware/auth')

const { addProducts, getAllProducts, createProduct } = require('../controllers/products')
const { uploadProductImage } = require('../controllers/upload')

router.route('/').get(authMid, getAllProducts).post(authMid, createProduct).put(addProducts)
router.route('/uploads').post(authMid, uploadProductImage)

module.exports = router
