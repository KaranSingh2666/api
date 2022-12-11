const router = require('express').Router()
const {createimg} = require('../controllers/cimgcontroller')

router.post('/createimg',createimg)

module.exports = router