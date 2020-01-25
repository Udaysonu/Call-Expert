const User=require('../models/user');
const Location=require('../models/locations');
const Expert=require('../models/expert');


module.exports.updatepage=function(req,res){
    req.flash('success','welcome to update page');
    res.render('updatepage');
}

module.exports.searchpage=function(req,res){
    req.flash('success','Welcome to search page');
    res.render('searchpage');
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
       req.flash('success','succesfully searched')
        res.render('searchpage',{
            details:location[field]
        });
    })
}