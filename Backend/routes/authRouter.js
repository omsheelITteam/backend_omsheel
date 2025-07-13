const express=require('express')
const {register, login, logout, verifyEmail, isAuthenticated, forgotPassword, resetPassword, sendResetOtp}=require('../controllers/authController')
const userAuth = require('../middleware/userAuth')
const submitData = require('../controllers/IncubatorData')
const { getInTouch } = require('../controllers/contactData');
const authRouter=express.Router()

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',logout)
// authRouter.post('/send-verify-otp',userAuth,otpVerification)
authRouter.post('/verify-email',userAuth,verifyEmail)
authRouter.post('/send-reset-otp', sendResetOtp)
authRouter.post('/reset-password',resetPassword)
authRouter.get('/is-auth',userAuth,isAuthenticated)
authRouter.post('/incubator',submitData)
authRouter.post('/contact-us',getInTouch)
module.exports=authRouter