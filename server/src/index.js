const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = require('./router')

app.use(bodyParser.json())
app.use(router)


app.listen(3000, () => {
	console.log('listeing on 3000')
})