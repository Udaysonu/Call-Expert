const User=require('../models/user');
const Expert=require('../models/expert');
const Location=require('../models/locations');
 
 


 


//expert modules


module.exports.updatepage=function(req,res){
    res.render('updatepage');
}
 
module.exports.create=function(req,res){

    Expert.create(req.body,function(err){
        if(err){
            return res.redirect("back");
        }
        return res.redirect("/");
    })
}
