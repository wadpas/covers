const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({
		featured: true,
	})
	res.status(200).json({ products, nbHists: products.length })
}

const getAllProducts = async (req, res) => {
	const products = await Product.find(req.query)
	res.status(200).json({ products })
}

module.exports = {
	getAllProductsStatic,
	getAllProducts,
}
