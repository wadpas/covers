const express = require('express')
const router = express.Router()

const { getAllProductsStatic, getAllProducts } = require('../controllers/products')
const { uploadProductImage, cloudinaryProductImage } = require('../controllers/upload')

router.route('/').get(getAllProducts)
router.route('/uploads').post(cloudinaryProductImage)

module.exports = router
