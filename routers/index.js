const express=require('express');
const router=express.Router();

router.get('/searcj',function(req,res){
    res.render('searchpage');
})
router.use('/expert',require('./expert'));
router.use('/user',require('./user'));
router.use('/auth',require('./authenticate'));
router.use('/update',require('./update'));
router.use('/',function(req,res){
    return res.render('searchpage');
})





module.exports=router