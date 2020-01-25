const express=require('express');
const router=express.Router();

router.use('/expert',require('./expert'));
router.use('/user',require('./user'));
router.use('/auth',require('./authenticate'));
router.use('/update',require('./update'));
router.use('/',function(req,res){
   
    return res.render('home.ejs');
})





module.exports=router