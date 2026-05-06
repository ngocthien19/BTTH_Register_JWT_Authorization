const express = require('express')
const router = express.Router()
const verifyController = require('../controllers/verifyController')
const { registerRateLimiter, validateRegisterInput } = require('../middleware/registerMiddleware')
const registerController = require('../controllers/registerController')
const forgotPasswordController = require('../controllers/forgotPasswordController')

router.post('/register', 
    registerRateLimiter,      
    validateRegisterInput,   
    registerController.handleRegistration
)

router.post('/verify-otp', verifyController.handleVerifyOTP)

router.post('/forgot-password', forgotPasswordController.handleForgotPassword)

router.post('/reset-password', forgotPasswordController.handleResetPassword)

module.exports = router