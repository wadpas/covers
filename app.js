require('dotenv').config()
require('express-async-errors')

const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUD_API_KEY,
	api_secret: process.env.CLOUD_API_SECRET,
})

const categoriesRouter = require('./routes/categories')
const productsRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const authMid = require('./middleware/auth')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())
app.use(fileUpload({ useTempFiles: true }))
app.use(helmet())
app.use(cors())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/categories', categoriesRouter)
app.use('/api/v1/products', productsRouter)
app.use('/api/v1/jobs', authMid, jobsRouter)
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './public', 'index.html'))
})
app.use(notFound)
app.use(errorHandler)

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI)
		app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
	} catch (error) {
		console.log(error)
	}
}

start()
