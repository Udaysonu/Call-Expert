const User=require('../models/user');
const Expert=require('../models/expert');
const Location=require('../models/locations');
 
 


 


//expert modules


module.exports.updatepage=function(req,res){
    req.flash('success','welcome to update page')
    res.render('updatepage');
}
 
module.exports.create=function(req,res){
     return
}
