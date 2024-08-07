require('dotenv').config()
require('express-async-errors')

const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const express = require('express')

const tasksRouter = require('./routes/tasks')
const productsRouter = require('./routes/products')
const authRouter = require('./routes/auth')
const jobsRouter = require('./routes/jobs')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const authMid = require('./middleware/auth')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/tasks', authMid, tasksRouter)
app.use('/api/v1/products', authMid, productsRouter)
app.use('/api/v1/jobs', authMid, jobsRouter)
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
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
