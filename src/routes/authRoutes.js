const express = require('express')
const router = express.Router()
const verifyController = require('../controllers/verifyController')
const { registerRateLimiter, validateRegisterInput } = require('../middleware/registerMiddleware')
const registerController = require('../controllers/registerController')

router.post('/register', 
    registerRateLimiter,      
    validateRegisterInput,   
    registerController.handleRegistration
)

router.post('/verify-otp', verifyController.handleVerifyOTP)

module.exports = router