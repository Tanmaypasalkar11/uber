const express=require('express');
const router=express.Router();
const {body}=require("express-validator");
const userController=require('../controllers/user.controller');
const authMiddleware=require('../middleware/auth.middleware');


router.post('/register',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:8}).withMessage('Password must be at least 8 characters'),
  body('fullName.firstName').isLength({min:3}).withMessage('Password Must be Longer Then require'),
  body('fullName.lastName').isLength({min:3}).withMessage('Password Must be Longer')
],userController.registerUser)

router.post('/login',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:8}).withMessage('Password must be at least 8 characters')
],userController.loginUser)

router.get('/profile',authMiddleware.authUser, userController.getProfile);
router.get('/logout',authMiddleware.authUser, userController.logoutUser);


module.exports=router;