const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Expert=require('../models/expert');
passport.use(new LocalStrategy(
    {passReqToCallback:true,
    usernameField:'email'},
    function(req,email, password, done) {         
        Expert.findOne({email:email}, function (err, expert) {
        if (err) {           
          return done(err); }
        if (!expert){ 
          return done(null, false); }
        if (expert.password!=password) { 
          console.log('wrong password');
          return done(null, false);}
        
        return done(null, expert);
      });
    }
));
passport.setAuthenticatedExpert=function(req,res,next){
     
    if(req){
        res.locals.expert=req.user;
       }
    next();
}
module.exports=passport;