var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expertSchema = new Schema({
name:{
    type:String,
    required:true,
},
pin:{
    type:String,
    required:true,
},
cook:[{type: mongoose.Types.ObjectId,
ref:'experts'}],
maid:[{type: mongoose.Types.ObjectId,
  ref:'experts'}],
  nurse:[{type: mongoose.Types.ObjectId,
    ref:'experts'}],
    electronics:[{type: mongoose.Types.ObjectId,
      ref:'experts'}],
      carpenter:[{type: mongoose.Types.ObjectId,
        ref:'experts'}],
        plumber:[{type: mongoose.Types.ObjectId,
          ref:'experts'}],
          painter:[{type: mongoose.Types.ObjectId,
            ref:'experts'}]

},{timestamps:true});
var expert = mongoose.model('locations', expertSchema);
  // ready to go!
module.exports=expert;