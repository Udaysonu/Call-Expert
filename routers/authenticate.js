const express=require('express');
const passport=require('../config/passport-local');
const router=express.Router();
const usecontroller=require('../controllers/authcontroller')
 
 

router.get('/signout',function(req,res){
    req.logout();
    return res.redirect('/')
})





//expert router
router.get('/signinexpert',passport.checkAuthentication,usecontroller.signinexpert);
router.get('/signupexpert',usecontroller.signupexpert);
router.post('/authenticateexpert',passport.authenticate('local',{
    failureRedirect:'back'
}),function(req,res){
    res.redirect('/expert/updatepage');
});
 
router.post('/createexpert',usecontroller.create_expert);





module.exports=router