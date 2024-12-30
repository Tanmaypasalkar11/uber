const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const {body}=require("express-validator");

router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({min:3}).withMessage('Firstname must be 3 words long'),
  body('password').isLength({min:8}).withMessage('Password must be at least 8 characters'),
  body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters'),
  body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 characters'),
  body('vehicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1'),
  body('vehicle.vehicleType').isIn(['bike', 'car', 'auto']).withMessage('Invalid vehicle type')
],captainController.registerCaptain);

module.exports = router;