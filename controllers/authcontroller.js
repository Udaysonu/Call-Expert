const User=require('../models/user');
const Expert=require('../models/expert');
const Location=require('../models/locations');
const mailer=require('../controllers/mailers/signupmailer');
// user controllers
module.exports.signin=function(req,res){ 
    
    req.flash('success','welcome to signin');
  
    return res.render('signin');
}
module.exports.signup=function(req,res){    
    req.flash('success','Created acocount succesfully');
    return res.render('signup')
}
module.exports.create=function(req,res){ req.flash('success','weraere')
    User.findOne({email:req.body.email},function(err,user){
        if(!user){
            User.create(req.body,function(err){
                if(err){
                    return res.redirect("back");
                }
                req.flash('success','succesfully created user')
                return res.redirect('/auth/signin');
            })
        }
    });
    
}





//expert controllers

module.exports.signinexpert=function(req,res){
    req.flash('success','signinexpert');
    return res.render('signin_expert');
}

module.exports.signupexpert=function(req,res){ 
    req.flash('success','signup expert')
    return res.render('signup_expert');
}

module.exports.create_expert=function(req,res){ req.flash('success','weraere')
    Expert.findOne({email:req.body.email},function(err,user){
        if(!user){
            console.log('entered')
            if(req.body.field=='None'){
                Expert.create(req.body,function(err,user){
                    req.flash('success','Account created succesfully. Please Signin to continue');
                    return res.redirect('/auth/signinexpert');
                })
            }else{
            Expert.create(req.body,function(err,user){
                console.log(err);
                Location.findOne({name:user.location},function(err,location){
                    if(location){
                        let field=user.field
                        let field2=field.toLowerCase();
                        console.log(user,user.field,field,field2,location[field2])
                        location[field2].push(user.id);
                        location.save();                         
                    }else{
                        Location.create({name:req.body.location,pin:req.body.pin},function(err,location){
                            let field=user.field
                            let field2=field.toLowerCase();
                            console.log(field,field2);
                            console.log(user,user.field);
                            location[field2].push(user.id);
                            location.save();   
                        })
                    }
                    return res.redirect('/auth/signinexpert')
                    
                })
            })}
        }
    })
}