const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
// const User=require('../models/user');
const User=require('../models/expert');
passport.use(new LocalStrategy(
    {passReqToCallback:true,
    usernameField:'email'},
     function(req,email, password, done){
        console.log(email,password,'welcome')
      User.findOne({ email:email}, function (err, user) {
        
        if(err){          
          return done(err); }
        
        
        
        if (user.password!=password) { 
            console.log('password incorrect');
          return done(null, false); }
        
        console.log('authenticated')
          return done(null, user);
      });
    }
  ));


passport.serializeUser(function(user, done) {
   
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
   
    User.findById(id, function(err, user){
      if(!user){
        Expert.findById(id,function(err,expert){
          done(null,expert)
        })
      }else{

      done(err, user);}
    });
});


passport.checkAuthentication=function(req,res,next){
if(req.isAuthenticated()){
    next();

}
else{     
    next()
}}

passport.setAuthenticatedUser=function(req,res,next){
    if(req){
         
        res.locals.user=req.user
       
    }
    next();
}
module.exports=passport;