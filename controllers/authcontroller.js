const User=require('../models/user');
const Expert=require('../models/expert');
const Location=require('../models/locations');
// user controllers
module.exports.signin=function(req,res){
    return res.render('signin');
}
module.exports.signup=function(req,res){
    return res.render('signup')
}
module.exports.create=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(!user){
            User.create(req.body,function(err){
                if(err){
                    return res.redirect("back");
                }
                return res.redirect('/auth/signin');
            })
        }
    });
    
}





//expert controllers

module.exports.signinexpert=function(req,res){
    return res.render('signin_expert');
}

module.exports.signupexpert=function(req,res){
    return res.render('signup_expert');
}

module.exports.create_expert=function(req,res){
    Expert.findOne({email:req.body.email},function(err,user){
        if(!user){
            console.log('entered')
            Expert.create(req.body,function(err,user){
                console.log(err);
                Location.findOne({name:user.location},function(err,location){
                    if(location){
                        let field=user.field
                        let field2=field.toLowerCase();
                        console.log(user,user.field,field,field2,location[field2])
                        location[field2].push(user.id);
                        location.save()
                         
                    }else{
                        Location.create({name:req.body.location,pin:req.body.pin},function(err,location){
                            let field=user.field
                            let field2=field.toLowerCase();
                            console.log(field,field2);
                            console.log(user,user.field);
                            location[field2].push(user.id);
                            location.save()   

                        })
                    }
                    return res.redirect('/auth/signinexpert')
                    
                })
            })
        }
    })
}