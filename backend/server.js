const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()


const port = process.env.PORT || 5000


const app = express();

app.get('/', (req, res) => {
	res.json({
		message: "This is a get request",
	})
})

app.listen(port, () => console.log(`Server started on port ${port}`))


