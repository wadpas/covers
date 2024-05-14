const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use('/api/v1/tasks', tasks)

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
