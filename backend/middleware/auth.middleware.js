const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModule=require('../models/captain.model');

module.exports.authUser=async(req,res,next)=>{
  const token=req.cookies.token || req.headers.authorization.split(' ')[1];
  if(!token){
    return res.status(401).json({message:'Unauthorized'});
  }

  const isBlackList=await blacklistTokenModel.findOne({token:token});
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

module.exports.captainAuth=async(req,res,next)=>{
  const token=req.cookies.token || req.headers.authorization.split(' ')[1];
  
  if(!token){
    res.status(401).json({message:'Unauthorized'});
  }
  const isBlackList=await blacklistTokenModel.findOne({token:token});
  if(isBlackList){
    return res.status(401).json({message:'Unauthorized'});
  }
  try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const captain=await captainModule.findById(decoded._id);
    req.captain=captain;
    next();
  }catch(error){
    return res.status(401).json({message:'Unauthorized'});
  }
}