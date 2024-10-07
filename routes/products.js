const express = require('express')
const router = express.Router()

const { addProducts, getAllProducts } = require('../controllers/products')
const { uploadProductImage } = require('../controllers/upload')

router.route('/').get(getAllProducts).post(addProducts)
router.route('/uploads').post(uploadProductImage)

module.exports = router
