const express=require('express')
const userAuth = require('../middleware/userAuth')
const getUserData = require('../controllers/userController')
const userRoute=express.Router()
userRoute.get('/data',userAuth,getUserData)
module.exports=userRoute