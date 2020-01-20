var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var crypto=require('crypto');
const User=require('../models/user');
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: '250691605211-7hsahr7kc796er5a9svqk50egdnrt8pa.apps.googleusercontent.com',
    clientSecret: 'SutB_0uc8MMwJR3jhF7c7FbP',
    callbackURL: "http://localhost:8000/user/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOne({ email: profile.emails[0].value}, function (err, user) {
         if(user){
            return done(err, user);
         }
         else{
             User.create({name:profile.displayName,email:profile.emails[0].value,
                            password:crypto.randomBytes(20).toString('hex')
                        },function(err,user){
                            return done(null,user);
                        })
         }
       });
  }
));

module.exports=passport