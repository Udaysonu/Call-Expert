const express=require('express');
const router=express.Router();
const updatecontroller=require('../controllers/updatecontroller');
router.post('/updateexpert',updatecontroller.updateexpert);



 


module.exports=router