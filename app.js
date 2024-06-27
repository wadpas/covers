require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const products = require('./routes/products')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use('/api/v1/products', products)
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
