const  express = require('express')
const home = require('../controller/home')
const router = express.Router()

router.get('/', home.getHome)

module.exports = router