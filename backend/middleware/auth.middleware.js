const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.authUser=async(req,res,next)=>{
  const token=req.cookies.token || req.headers.authorization.split(' ')[1];
  if(!token){
    return res.status(401).json({message:'Unauthorized'});
  }

  const isBlackList=await userModel.findOne({token:token});
  if(isBlackList){
    return res.status(401).json({message:'Unauthorized'});
  }
  try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const user=await userModel.findById(decoded._id);
    if(!user){
      return res.status(404).json({message:'User not found'});
    }
    req.user=user;
    next();
    } catch (error) {
    return res.status(401).json({message:'Unauthorized'});
    }
}
