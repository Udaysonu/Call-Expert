const User=require('../models/user');
const Location=require('../models/locations');
const Expert=require('../models/expert');
module.exports.updatepage=function(req,res){
    res.render('updatepage');
}

module.exports.search=async function(req,res){
    var field=req.body.job.toLowerCase();
    location=await Location.findOne({name:req.body.location})
    if(!location){
        return res.render('searchpage')
    }
    Location.findOne({name:req.body.location}).populate(field).exec(function(err,location){
       if(!location){
           res.render('searchpage')
           return
       }        
        res.render('searchpage',{
            details:location[field]
        });
    })
}