const express=require('express');
const router=express.Router();
const passport=require('../config/passport-google-auth2-strategy');
const usercontroller=require('../controllers/usercontroller');
router.get('/searchpage',usercontroller.searchpage);
router.post('/search',usercontroller.search);
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}));
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'back'}),function(req,res){
    res.redirect('/');
});
router.get('/updatepage',usercontroller.updatepage);
module.exports=router;