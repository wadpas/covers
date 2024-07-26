require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const tasksRouter = require('./routes/tasks')
const productsRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')

const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const port = process.env.PORT || 3000
const authenticateUser = require('./middleware/auth')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', authenticateUser, tasksRouter)
app.use('/api/v1/products', authenticateUser, productsRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

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
