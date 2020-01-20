const express=require('express');
const passport=require('../config/passport-local');
const passport2=require('../config/passport-local-expert');
const router=express.Router();
const usecontroller=require('../controllers/authcontroller')
router.get('/signin',passport.checkAuthentication,usecontroller.signin);
router.get('/signup',passport.checkAuthentication,usecontroller.signup);
router.post('/createuser' ,usecontroller.create);
router.post('/authenticate',passport.authenticate('local',{
    failureRedirect:'/'
}),function(req,res){
    res.render('searchpage');
});







//expert router
router.get('/signinexpert',passport.checkAuthentication,usecontroller.signinexpert);
router.get('/signupexpert',usecontroller.signupexpert);
router.post('/authenticateexpert',passport2.authenticate('local',{
    failureRedirect:'/'
}),function(req,res){
    res.redirect('/expert/updatepage');
});
 
router.post('/createexpert',usecontroller.create_expert);





module.exports=router