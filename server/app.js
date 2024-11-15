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

const movies = require('./routes/movies')
const auth = require('./routes/auth')
const connectDB = require('./config/mongodb')
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
app.use('/api/v1/auth', auth)
app.use('/api/v1/movies', movies)
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
