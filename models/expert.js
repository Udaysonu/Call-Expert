var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var path=require('path');
var multer=require('multer');
var AVATAR_PATH=path.join('/uploads/experts/avatar/');
var expertSchema = new Schema({
  email:{ type:String,
    required:true
  },
  name: {
      type:String,required:true
  },
  location:{
    type:String,
    required:true
  },
  pin:{
    type:String,
    required:true
  },
  field:{
      type:String,
      required:true
  },
  phone:{
    type:String,
    required:true
  },
  rating:{
      type:Number,
  },
  password:{
    type:String,
    required:true
  },
  avatar:{
    type:String,
  }
},{timestamps:true});

  // ready to go!
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
expertSchema.statics.avatarPath=AVATAR_PATH;
expertSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
var expert = mongoose.model('experts', expertSchema);
module.exports=expert;