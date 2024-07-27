require('dotenv').config()
require('express-async-errors')

const helmet = require('helmet')
const cors = require('cors')
const rateLimiter = require('express-rate-limit')
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
app.use(helmet())
app.use(cors())
app.set('trust proxy', 1)
app.use(
	rateLimiter({
		windowMs: 15 * 60 * 1000, // 15 minutes
		max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
		standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	})
)
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
