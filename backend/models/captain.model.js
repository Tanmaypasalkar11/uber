const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');


const captainSchema=new mongoose.Schema({
  fullname:{
    firstname:{
      type:String,
      required:true,
      minlength:[3,'Firstname must be 3 words long']
    },
    lastname:{
      type:String,
      minlength:[3,'lastname must be atleast of 3 words long']
    }
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  password:{
    type:String,
    required:true,
    
  },
  socket_id:{
    type:String
  },
  status:{
    type:String,
    enum:['online','offline'],
    default:'offline'
  },
  vehicle:{
    color:{
      type:String,
      required:true
    },
    plate:{
      type:String,
      required:true
    },
    capacity:{
      type:Number,
      required:true,
      min:[1,'Capacity must be atleast 1']
    },
    vehicleType:{
      type:String,
      required:true,
      enum:['bike','car','auto']
    }
  },
  location:{
    lat:{
      type:Number,
    },
    lng:{
      type:Number,
      
    }
  }
})

captainSchema.methods.generateAuthToken=function(){
  const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
  return token;
}

captainSchema.methods.comparePassword=async function(password){
  return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){
  return await bcrypt.hash(password,10);
}


const captainModule=mongoose.model('Captain',captainSchema);
module.exports=captainModule;