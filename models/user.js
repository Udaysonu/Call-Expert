var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email:{ type:String,
    required:true
  },
  name: {
      type:String,required:true
  },
  password:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  }
},{timestamps:true});
var user = mongoose.model('user', userSchema);
  // ready to go!
module.exports=user;