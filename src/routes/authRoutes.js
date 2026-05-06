const express = require('express')
const router = express.Router()
const { registerRateLimiter, validateRegisterInput } = require('../middleware/registerMiddleware')
const registerController = require('../controllers/registerController')

router.post('/register', 
    registerRateLimiter,      
    validateRegisterInput,   
    registerController.handleRegistration
);

module.exports = router