const userModel=require('../models/user');


module.exports.createUser=async({
  firstName,lastName,email,password
})=>{
  if(!firstName||!lastName||!email||!password){
    throw new Error('Please fill all fields');
  }
  const existingUser=await userModel.findOne({email});
  if(existingUser){
    throw new Error('Email already exists');
    }
  const user=userModel.create({
    fullName:{
      firstName,
      lastName
    },
    email,
    password
  });
  return user;
}